> Full-stack portfolio deployed on AWS EC2 with CI/CD automation.

[![CI/CD](https://github.com/USERNAME/my-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/USERNAME/my-portfolio/actions)

## 🌍 Live Demo
**URL:** http://ELASTIC_IP

## 🛠 Tech Stack
| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14, React |
| Runtime | Node.js 20 |
| Process Manager | PM2 |
| Reverse Proxy | Nginx |
| Cloud | AWS EC2 t2.micro |
| CI/CD | GitHub Actions |
| Monitoring | Netdata |

## 🏗 Architecture
```
GitHub → GitHub Actions → AWS EC2 → Nginx → Next.js (PM2)
                                          ↓
                                    Netdata (Monitoring)
```

## ⚡ CI/CD Pipeline
Pipeline otomatis berjalan setiap push ke branch `main`:
1. ✅ Install dependencies (`npm ci`)
2. ✅ Build Next.js application
3. ✅ Deploy ke EC2 via SSH
4. ✅ Restart PM2 process

## 📈 Monitoring
- **Tool:** Netdata (open source)
- **Metrics:** CPU, RAM, Disk, Network, Nginx requests
- **Dashboard:** Available via SSH tunnel port 19999

## 🔐 Security Measures
- SSH key-only authentication (password disabled)
- AWS Security Groups (restricted ports)
- Secrets managed via GitHub Actions Secrets
- `.env` excluded from version control

## 🚀 Local Development
```bash
git clone https://github.com/USERNAME/my-portfolio.git
cd my-portfolio
npm install
npm run dev
# Open http://localhost:3000
```

## 🔧 Environment Variables
Copy `.env.example` to `.env` and fill in values:
```bash
cp .env.example .env
