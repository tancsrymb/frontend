'use client'

import { useState } from 'react'
import Swal from 'sweetalert2'

export default function RegisterPage() {
  const [firstname, setFirstname] = useState('')
  const [fullname, setFullname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [sex, setSex] = useState('')
  const [address, setAddress] = useState('')
  const [birthday, setBirthday] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch('https://backend-nu-snowy.vercel.app/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          firstname,
          fullname,
          lastname,
          username,
          password,
          sex,
          address,
          birthday,
        }),
      })

      const result = await res.json()

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'สมัครสมาชิกสำเร็จ',
          text: 'คุณได้สมัครสมาชิกเรียบร้อยแล้ว',
          confirmButtonText: 'ตกลง',
        })

        setFirstname('')
        setFullname('')
        setLastname('')
        setUsername('')
        setPassword('')
        setSex('')
        setAddress('')
        setBirthday('')
      } else {
        Swal.fire({
          icon: 'error',
          title: 'เกิดข้อผิดพลาด',
          text: result.message || 'ไม่สามารถสมัครสมาชิกได้',
        })
      }
    } catch (error) {
      console.error('Error:', error)
      Swal.fire({
        icon: 'error',
        title: 'ข้อผิดพลาด',
        text: 'ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้',
      })
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded">
      <h1 className="text-xl font-bold mb-4 text-white ">สมัครสมาชิก</h1>
      <form onSubmit={handleSubmit} className="">
        <select
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">เลือกคำนำหน้าชื่อ</option>
          <option value="นาย">นาย</option>
          <option value="นาง">นาง</option>
          <option value="นางสาว">นางสาว</option>
          <option value="เด็กชาย">เด็กชาย</option>
          <option value="เด็กหญิง">เด็กหญิง</option>
        </select>

        <input
          type="text"
          placeholder="ชื่อ"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="นามสกุล"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <select
          value={sex}
          onChange={(e) => setSex(e.target.value)}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">เลือกเพศ</option>
          <option value="ชาย">ชาย</option>
          <option value="หญิง">หญิง</option>
          <option value="อื่นๆ">อื่นๆ</option>
        </select>
        <input
          type="text"
          placeholder="ที่อยู่"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          สมัครสมาชิก
        </button>
      </form>
    </div>
  )
}
