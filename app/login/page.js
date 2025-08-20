'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'

export default function Page() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch('http://itdev.cmtc.ac.th:3000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    console.log(username);

    if (data.token) {
      localStorage.setItem('token', data.token);
      router.push('/admin/users');
    } else {
      router.push('/signin');
    }
  };

  return (
    <>
    <br /><br /><br />
<div className="container">
<div className="card">
  <div className="card-header bg-success text-white">
    SignIn Form
  </div>
  <div className="card-body">

  <form className="row g-3" onSubmit={handleLogin}>
  <div className="col-md-12">
  <label className="form-label">Username</label>
    <div className="input-group">
      <span className="input-group-text" id="basic-addon3"><i className="bi bi-person-vcard"></i></span>
    <input type="text" className="form-control" id="formGroupExampleInput" defaultValue={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
  </div>
  </div>
  <div className="col-md-12">
  <label className="form-label">Password</label>
    <div className="input-group">
      <span className="input-group-text" id="basic-addon3"><i className="bi bi-person-vcard"></i></span>
    <input type="text" className="form-control" id="formGroupExampleInput2" defaultValue={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
  </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign In</button>
  </div>
  <div className="col-12">
    <Link href="/register">Create Account</Link> | <Link href="/">Forget Password</Link>
  </div>
  </form>
  </div>
  </div>


  </div>
    </>
  );
}