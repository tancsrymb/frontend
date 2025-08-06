'use client'

import { useState } from 'react'
import Swal from 'sweetalert2'

export default function RegisterPage() {
  const [firstname, setFirstname] = useState('')
  const [fullname, setFullname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ firstname, fullname, lastname, username, password }),
      })

      const result = await res.json()

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'แก้ไขข้อมูลสำเร็จ',
          text: 'คุณได้แก้ไขข้อมูลสำเร็จ',
          confirmButtonText: 'ตกลง',
        })

        // ล้างค่าฟอร์ม
        setFirstname('')
        setFullname('')
        setLastname('')
        setUsername('')
        setPassword('')

        // ถ้าต้องการ redirect ไปหน้า login
        // window.location.href = '/login'
      } else {
        Swal.fire({
          icon: 'error',
          title: 'เกิดข้อผิดพลาด',
          text: result.message || 'ไม่สามารถแก้ไขข้อมูลได้',
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
      <h1 className="text-xl font-bold mb-4">สมัครสมาชิก</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
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
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-blue-600"
        >
          สมัครสมาชิก
        </button>
      </form>
    </div>
  )
}
