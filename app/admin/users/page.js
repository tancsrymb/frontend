'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import Link from 'next/link';

export default function UserListDarkRed() {
  const router = useRouter();
  
  // --- State Management ---
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('create'); 
  const [editingId, setEditingId] = useState(null);

  // Form Data State
  const [formData, setFormData] = useState({
    firstname: '', fullname: '', lastname: '', username: '',
    password: '', address: '', sex: '', birthday: ''
  });

  // --- API Functions ---

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) { /* router.push('/login'); */ } // Optional redirect

      const res = await fetch('https://backend-pied-psi-18.vercel.app/api/users', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (!res.ok) throw new Error('Failed to fetch data');
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
        let url = 'https://backend-pied-psi-18.vercel.app/api/users';
        let method = 'POST';
        const payload = { ...formData };

        if (modalMode === 'edit') {
            url = `${url}/${editingId}`;
            method = 'PUT';
            if (!payload.password) delete payload.password;
        } else {
            if (!payload.password) {
                Swal.fire({
                    title: 'Missing Password',
                    text: 'Please enter a password.',
                    icon: 'warning',
                    confirmButtonColor: '#dc2626',
                    background: '#1a1a1a',
                    color: '#fff'
                });
                return;
            }
        }

        const res = await fetch(url, {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(payload)
        });

        if (res.ok) {
            Swal.fire({
                title: 'Success!',
                text: modalMode === 'create' ? 'User added successfully' : 'User updated successfully',
                icon: 'success',
                confirmButtonColor: '#dc2626',
                background: '#1a1a1a',
                color: '#fff'
            });
            closeModal();
            fetchUsers();
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Operation failed',
                icon: 'error',
                confirmButtonColor: '#dc2626',
                background: '#1a1a1a',
                color: '#fff'
            });
        }

    } catch (error) {
        Swal.fire({
            title: 'Network Error',
            text: 'Cannot connect to server',
            icon: 'error',
            confirmButtonColor: '#dc2626',
            background: '#1a1a1a',
            color: '#fff'
        });
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc2626', // Red
      cancelButtonColor: '#4b5563', // Gray
      confirmButtonText: 'Yes, delete it!',
      background: '#1a1a1a',
      color: '#fff'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const token = localStorage.getItem('token');
          const res = await fetch(`https://backend-pied-psi-18.vercel.app/api/users/${id}`, {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Authorization': `Bearer ${token}`
            },
          });

          if (res.ok) {
            Swal.fire({
                title: 'Deleted!',
                text: 'User has been deleted.',
                icon: 'success',
                confirmButtonColor: '#dc2626',
                background: '#1a1a1a',
                color: '#fff'
            });
            fetchUsers();
          } else {
            Swal.fire({
                title: 'Failed',
                text: 'Could not delete user.',
                icon: 'error',
                confirmButtonColor: '#dc2626',
                background: '#1a1a1a',
                color: '#fff'
            });
          }
        } catch (error) {}
      }
    });
  };

  // --- Helper Functions ---

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const openCreateModal = () => {
    setModalMode('create');
    setEditingId(null);
    setFormData({
        firstname: '', fullname: '', lastname: '', username: '',
        password: '', address: '', sex: '', birthday: ''
    });
    setShowModal(true);
  };

  const openEditModal = (user) => {
    setModalMode('edit');
    setEditingId(user.id);
    let formattedDate = '';
    if (user.birthday) {
        try { formattedDate = new Date(user.birthday).toISOString().split('T')[0]; } catch(e) {}
    }
    setFormData({
        firstname: user.firstname || '',
        fullname: user.fullname || '',
        lastname: user.lastname || '',
        username: user.username || '',
        password: '',
        address: user.address || '',
        sex: user.sex || '',
        birthday: formattedDate
    });
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  // Loading Screen
  if (loading) {
      return (
          <div className="min-vh-100 d-flex align-items-center justify-content-center bg-black">
              <div className="text-center">
                  <div className="spinner-border text-danger" role="status" style={{width: '3rem', height: '3rem'}}></div>
                  <div className="mt-3 text-white fw-bold tracking-wider">LOADING...</div>
              </div>
          </div>
      );
  }

  return (
    <div className="min-vh-100 bg-black text-white position-relative overflow-hidden font-sans">
      
      {/* Background Effects */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{zIndex: 0}}>
        <div className="position-absolute top-0 end-0 bg-danger opacity-25 rounded-circle blur-3xl" style={{width: '600px', height: '600px', filter: 'blur(150px)', transform: 'translate(30%, -30%)'}}></div>
        <div className="position-absolute bottom-0 start-0 bg-danger opacity-10 rounded-circle blur-3xl" style={{width: '500px', height: '500px', filter: 'blur(120px)', transform: 'translate(-30%, 30%)'}}></div>
      </div>

      {/* Import Bootstrap & Icons */}
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />

      <div className="container py-5 position-relative" style={{zIndex: 1}}>
        
        {/* Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-end mb-5 gap-3">
            <div>
                <div className="text-danger fw-bold small text-uppercase mb-1 tracking-widest">
                    <i className="bi bi-shield-lock-fill me-2"></i>Admin Panel
                </div>
                <h1 className="display-4 fw-black text-white lh-1">
                    User <span className="text-transparent bg-clip-text bg-gradient-to-r from-danger to-warning" style={{backgroundImage: 'linear-gradient(45deg, #ef4444, #b91c1c)', WebkitBackgroundClip: 'text', color: 'transparent'}}>Management</span>
                </h1>
            </div>
            
            <button 
                className="btn btn-lg rounded-4 fw-bold px-4 py-3 d-flex align-items-center gap-2 shadow-lg"
                onClick={openCreateModal}
                style={{
                    background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
                    border: 'none',
                    color: 'white',
                    boxShadow: '0 10px 25px -5px rgba(220, 38, 38, 0.5)'
                }}
            >
                <i className="bi bi-plus-lg fs-5"></i>
                <span>Add New User</span>
            </button>
        </div>

        {/* Stats Card */}
        <div className="row g-4 mb-5">
            <div className="col-md-4">
                <div className="p-4 rounded-4 border border-secondary border-opacity-25" style={{background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)'}}>
                    <div className="d-flex align-items-center gap-3">
                        <div className="p-3 rounded-3 bg-danger bg-opacity-25 text-danger">
                            <i className="bi bi-people-fill fs-3"></i>
                        </div>
                        <div>
                            <div className="text-secondary small fw-bold text-uppercase">Total Users</div>
                            <div className="fs-2 fw-bold text-white">{users.length}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Table Card */}
        <div className="card border-0 rounded-4 overflow-hidden shadow-2xl" style={{background: 'rgba(20, 20, 20, 0.6)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)'}}>
          <div className="table-responsive">
            <table className="table table-dark table-hover align-middle mb-0" style={{background: 'transparent'}}>
              <thead className="text-uppercase small fw-bold text-secondary" style={{background: 'rgba(0,0,0,0.5)', borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
                <tr>
                  <th className="py-4 ps-4 text-center">#</th>
                  <th className="py-4">User Info</th>
                  <th className="py-4">Username</th>
                  <th className="py-4 text-center">Gender</th>
                  <th className="py-4">Birthday</th>
                  <th className="py-4 text-end pe-4">Actions</th>
                </tr>
              </thead>
              <tbody className="border-top-0">
                {users.length > 0 ? (
                  users.map((user, index) => (
                    <tr key={user.id} style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                      <td className="text-center text-secondary py-4">{index + 1}</td>
                      <td className="py-4">
                        <div className="d-flex align-items-center gap-3">
                            <div className="rounded-circle d-flex align-items-center justify-content-center fw-bold text-white fs-5" 
                                 style={{width: '45px', height: '45px', background: 'linear-gradient(45deg, #ef4444, #7f1d1d)'}}>
                                {user.firstname ? user.firstname.charAt(0) : '?'}
                            </div>
                            <div>
                                <div className="fw-bold text-white">{user.firstname} {user.fullname} {user.lastname}</div>
                                <div className="small text-secondary">{user.address || 'No address provided'}</div>
                            </div>
                        </div>
                      </td>
                      <td className="py-4">
                          <span className="badge rounded-pill bg-dark border border-secondary border-opacity-25 text-secondary px-3 py-2 fw-normal font-monospace">
                              @{user.username}
                          </span>
                      </td>
                      <td className="text-center py-4">
                        {user.sex === 'ชาย' && <span className="badge rounded-1 text-uppercase bg-info bg-opacity-10 text-info border border-info border-opacity-25">Male</span>}
                        {user.sex === 'หญิง' && <span className="badge rounded-1 text-uppercase bg-danger bg-opacity-10 text-danger border border-danger border-opacity-25">Female</span>}
                        {user.sex !== 'ชาย' && user.sex !== 'หญิง' && <span className="badge rounded-1 bg-secondary bg-opacity-10 text-secondary">{user.sex || '-'}</span>}
                      </td>
                      <td className="py-4 text-secondary">
                          {user.birthday ? new Date(user.birthday).toLocaleDateString('th-TH') : '-'}
                      </td>
                      <td className="text-end pe-4 py-4">
                        <div className="d-flex justify-content-end gap-2">
                            <button className="btn btn-dark btn-sm rounded-3 border border-secondary border-opacity-25 text-white hover-bg-light" 
                                    style={{width: '36px', height: '36px'}}
                                    onClick={() => openEditModal(user)}>
                                <i className="bi bi-pencil"></i>
                            </button>
                            <button className="btn btn-danger btn-sm rounded-3 border-0 bg-danger bg-opacity-25 text-danger hover-bg-danger hover-text-white" 
                                    style={{width: '36px', height: '36px'}}
                                    onClick={() => handleDelete(user.id)}>
                                <i className="bi bi-trash"></i>
                            </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-5 text-muted">
                        <i className="bi bi-inbox fs-1 d-block mb-3 opacity-25"></i>
                        No users found in database
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* --- MODAL --- */}
      {showModal && (
        <>
          <div className="modal-backdrop show" style={{backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(5px)'}}></div>
          <div className="modal fade show d-block" tabIndex="-1">
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content border border-secondary border-opacity-25 rounded-4 shadow-2xl" style={{background: '#1a1a1a', color: 'white'}}>
                
                <div className="modal-header border-bottom border-secondary border-opacity-10 p-4">
                  <h5 className="modal-title fw-bold d-flex align-items-center gap-2">
                    <span className="p-2 rounded bg-danger bg-opacity-20 text-danger"><i className={`bi ${modalMode === 'create' ? 'bi-person-plus-fill' : 'bi-pencil-fill'}`}></i></span>
                    {modalMode === 'create' ? 'Create New User' : 'Edit User Profile'}
                  </h5>
                  <button type="button" className="btn-close btn-close-white opacity-50" onClick={closeModal}></button>
                </div>
                
                <div className="modal-body p-4 p-md-5">
                  <form onSubmit={handleSubmit}>
                    
                    {/* Name Section */}
                    <h6 className="text-uppercase text-secondary small fw-bold mb-3 tracking-wider">Personal Information</h6>
                    <div className="row g-3 mb-4">
                        <div className="col-md-3">
                            <label className="form-label small text-secondary">Title</label>
                            <select className="form-select bg-dark border-secondary border-opacity-25 text-white focus-ring-danger" 
                                    style={{borderColor: 'rgba(255,255,255,0.1)'}}
                                    name="firstname" value={formData.firstname} onChange={handleInputChange}>
                                <option value="">Select</option>
                                <option value="นาย">นาย</option>
                                <option value="นาง">นาง</option>
                                <option value="นางสาว">นางสาว</option>
                                <option value="เด็กชาย">เด็กชาย</option>
                                <option value="เด็กหญิง">เด็กหญิง</option>
                            </select>
                        </div>
                        <div className="col-md-5">
                            <label className="form-label small text-secondary">First Name</label>
                            <input type="text" className="form-control bg-dark border-secondary border-opacity-25 text-white" 
                                   style={{borderColor: 'rgba(255,255,255,0.1)'}}
                                   name="fullname" value={formData.fullname} onChange={handleInputChange} required />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label small text-secondary">Last Name</label>
                            <input type="text" className="form-control bg-dark border-secondary border-opacity-25 text-white" 
                                   style={{borderColor: 'rgba(255,255,255,0.1)'}}
                                   name="lastname" value={formData.lastname} onChange={handleInputChange} required />
                        </div>
                    </div>

                    {/* Account Section */}
                    <h6 className="text-uppercase text-secondary small fw-bold mb-3 tracking-wider mt-4">Account Details</h6>
                    <div className="row g-3 mb-4">
                        <div className="col-md-6">
                            <label className="form-label small text-secondary">Username</label>
                            <div className="input-group">
                                <span className="input-group-text bg-dark border-secondary border-opacity-25 text-secondary" style={{borderColor: 'rgba(255,255,255,0.1)'}}>@</span>
                                <input type="text" className="form-control bg-dark border-secondary border-opacity-25 text-white" 
                                       style={{borderColor: 'rgba(255,255,255,0.1)'}}
                                       name="username" value={formData.username} onChange={handleInputChange} required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label small text-secondary">Password {modalMode === 'edit' && <span className="text-muted fst-italic">(Leave blank to keep current)</span>}</label>
                            <input type="password" className="form-control bg-dark border-secondary border-opacity-25 text-white" 
                                   style={{borderColor: 'rgba(255,255,255,0.1)'}}
                                   name="password" value={formData.password} onChange={handleInputChange} placeholder="••••••••" required={modalMode === 'create'} />
                        </div>
                    </div>

                    {/* Other Details */}
                    <div className="row g-3 mb-4">
                        <div className="col-md-6">
                            <label className="form-label small text-secondary">Gender</label>
                            <div className="d-flex gap-3">
                                <div className="form-check">
                                    <input className="form-check-input bg-dark border-secondary border-opacity-25" type="radio" name="sex" id="male" value="ชาย" checked={formData.sex === 'ชาย'} onChange={handleInputChange} />
                                    <label className="form-check-label text-white" htmlFor="male">Male</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input bg-dark border-secondary border-opacity-25" type="radio" name="sex" id="female" value="หญิง" checked={formData.sex === 'หญิง'} onChange={handleInputChange} />
                                    <label className="form-check-label text-white" htmlFor="female">Female</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label small text-secondary">Date of Birth</label>
                            <input type="date" className="form-control bg-dark border-secondary border-opacity-25 text-white" 
                                   style={{borderColor: 'rgba(255,255,255,0.1)', colorScheme: 'dark'}}
                                   name="birthday" value={formData.birthday} onChange={handleInputChange} />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="form-label small text-secondary">Address</label>
                        <textarea className="form-control bg-dark border-secondary border-opacity-25 text-white" 
                                  style={{borderColor: 'rgba(255,255,255,0.1)'}}
                                  rows="2" name="address" value={formData.address} onChange={handleInputChange}></textarea>
                    </div>

                    <div className="d-grid gap-2 pt-3 border-top border-secondary border-opacity-10">
                        <button type="submit" className="btn btn-danger btn-lg rounded-3 fw-bold shadow-lg"
                                style={{background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)', border: 'none'}}>
                            {modalMode === 'create' ? 'Create User Account' : 'Save Changes'}
                        </button>
                        <button type="button" className="btn btn-link text-secondary text-decoration-none" onClick={closeModal}>Cancel</button>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}