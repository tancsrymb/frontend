import { Prompt } from 'next/font/google';

const prompt = Prompt({
  subsets: ['thai', 'latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: "Register",
};

export default function Register() {
  return (
    <>
      {/* Bootstrap CSS */}
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" 
        crossOrigin="anonymous" 
      />
      
      <main className={`${prompt.className} min-h-screen flex items-center justify-center bg-black px-4 py-5`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="card shadow-lg border-0" style={{backgroundColor: '#1a1a1a', color: '#fff'}}>
                <div className="card-body p-5">
                  <h2 className="text-center mb-4 text-danger">สมัครสมาชิก</h2>
                  
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="firstName" className="form-label">ชื่อจริง</label>
                        <input 
                          type="text" 
                          className="form-control form-control-lg bg-dark text-white border-secondary" 
                          id="firstName" 
                          placeholder="กรอกชื่อจริง"
                          required
                        />
                      </div>
                      
                      <div className="col-md-6 mb-3">
                        <label htmlFor="lastName" className="form-label">นามสกุล</label>
                        <input 
                          type="text" 
                          className="form-control form-control-lg bg-dark text-white border-secondary" 
                          id="lastName" 
                          placeholder="กรอกนามสกุล"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">อีเมล</label>
                      <input 
                        type="email" 
                        className="form-control form-control-lg bg-dark text-white border-secondary" 
                        id="email" 
                        placeholder="กรอกอีเมลของคุณ"
                        required
                      />
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">เบอร์โทรศัพท์</label>
                      <input 
                        type="tel" 
                        className="form-control form-control-lg bg-dark text-white border-secondary" 
                        id="phone" 
                        placeholder="กรอกเบอร์โทรศัพท์"
                        required
                      />
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">รหัสผ่าน</label>
                      <input 
                        type="password" 
                        className="form-control form-control-lg bg-dark text-white border-secondary" 
                        id="password" 
                        placeholder="กรอกรหัสผ่าน"
                        required
                      />
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="confirmPassword" className="form-label">ยืนยันรหัสผ่าน</label>
                      <input 
                        type="password" 
                        className="form-control form-control-lg bg-dark text-white border-secondary" 
                        id="confirmPassword" 
                        placeholder="กรอกรหัสผ่านอีกครั้ง"
                        required
                      />
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="birthDate" className="form-label">วันเกิด</label>
                      <input 
                        type="date" 
                        className="form-control form-control-lg bg-dark text-white border-secondary" 
                        id="birthDate" 
                        required
                      />
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="gender" className="form-label">เพศ</label>
                      <select 
                        className="form-select form-select-lg bg-dark text-white border-secondary" 
                        id="gender"
                        required
                      >
                        <option value="">เลือกเพศ</option>
                        <option value="male">ชาย</option>
                        <option value="female">หญิง</option>
                        <option value="other">อื่นๆ</option>
                      </select>
                    </div>
                    
                    <div className="mb-4 form-check">
                      <input 
                        type="checkbox" 
                        className="form-check-input" 
                        id="terms"
                        required
                      />
                      <label className="form-check-label" htmlFor="terms">
                        ฉันยอมรับ <a href="#" className="text-decoration-none text-danger">ข้อกำหนดและเงื่อนไข</a> และ <a href="#" className="text-decoration-none text-danger">นโยบายความเป็นส่วนตัว</a>
                      </label>
                    </div>
                    
                    <div className="d-grid gap-2">
                      <button 
                        type="submit" 
                        className="btn btn-danger btn-lg"
                      >
                        สมัครสมาชิก
                      </button>
                    </div>
                    
                    <hr className="my-4" />
                    
                    <div className="text-center">
                      <span className="text-white">มีบัญชีอยู่แล้ว? </span>
                      <a href="/login" className="text-decoration-none text-danger">เข้าสู่ระบบ</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Bootstrap JS */}
      <script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" 
        crossOrigin="anonymous"
      />
    </>
  );
}