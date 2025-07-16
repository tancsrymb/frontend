import { Prompt } from 'next/font/google';

const prompt = Prompt({
  subsets: ['thai', 'latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: "Register",
};

export default function Home() {
  return (
    <>
      {/* Bootstrap CSS */}
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" 
        crossOrigin="anonymous" 
      />
      
      <main className={`${prompt.className} min-h-screen flex items-center justify-center bg-black px-4`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="card shadow-lg border-0" style={{backgroundColor: '#1a1a1a', color: '#fff'}}>
                <div className="card-body p-5">
                  <h2 className="text-center mb-4 text-danger">เข้าสู่ระบบ</h2>
                  
                  <form>
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
                      <label htmlFor="password" className="form-label">รหัสผ่าน</label>
                      <input 
                        type="password" 
                        className="form-control form-control-lg bg-dark text-white border-secondary" 
                        id="password" 
                        placeholder="กรอกรหัสผ่าน"
                        required
                      />
                    </div>
                    
                    <div className="mb-3 form-check">
                      <input 
                        type="checkbox" 
                        className="form-check-input" 
                        id="remember"
                      />
                      <label className="form-check-label" htmlFor="remember">
                        จดจำฉัน
                      </label>
                    </div>
                    
                    <div className="d-grid gap-2">
                      <button 
                        type="submit" 
                        className="btn btn-danger btn-lg"
                      >
                        เข้าสู่ระบบ
                      </button>
                    </div>
                    
                    <hr className="my-4" />
                    
                    <div className="text-center">
                      <a href="#" className="text-decoration-none text-danger">ลืมรหัสผ่าน?</a>
                    </div>
                    
                    <div className="text-center mt-3">
                      <span className="text-white ">ยังไม่มีบัญชี? </span>
                      <a href="/register" className="text-decoration-none text-danger">สมัครสมาชิก</a>
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