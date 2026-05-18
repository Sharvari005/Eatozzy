# Eatozzy
food delivery app

Here are the **step-by-step production-style MERN deployment using Nginx on AWS EC2** (viva + practical ready).

We assume:

* Backend = Node.js (port 5000)
* Frontend = React
* Server = Amazon Web Services EC2 Ubuntu
* Web server = Nginx

---

# 🚀 STEP 1: Launch EC2 Instance

* Choose **Ubuntu**
* Create instance
* Allow inbound rules:

  * SSH (22)
  * HTTP (80)
  * HTTPS (443)

❌ Do NOT open 5000 for public (important)

---

# 🔗 STEP 2: Connect to EC2

```bash
ssh -i key.pem ubuntu@public-ip
```

---

# 🔄 STEP 3: Update system

```bash
sudo apt update
sudo apt upgrade -y
```

---

# 📦 STEP 4: Install Node.js

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
```

Check:

```bash
node -v
npm -v
```

---

# 📁 STEP 5: Upload MERN project

Options:

* GitHub clone

```bash
git clone <repo-url>
```

OR use SCP.

---

# ⚙️ STEP 6: Setup Backend

```bash
cd backend
npm install
```

Run backend:

```bash
node index.js
```

OR using PM2 (recommended):

```bash
sudo npm install -g pm2
pm2 start index.js
pm2 save
```

👉 Backend runs on:

```text
localhost:5000
```

---

# 🌐 STEP 7: Install Nginx

```bash
sudo apt install nginx -y
```

Start nginx:

```bash
sudo systemctl start nginx
sudo systemctl enable nginx
```

---

# ⚙️ STEP 8: Configure Nginx (MOST IMPORTANT)

Open config file:

```bash
sudo nano /etc/nginx/sites-available/default
```

Replace with:

```nginx
server {
    listen 80;

    server_name your-domain-or-ip;

    location / {
        root /var/www/html;
        index index.html;
    }

    location /api/ {
        proxy_pass http://localhost:5000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

# 🔁 STEP 9: Restart Nginx

```bash
sudo systemctl restart nginx
```

---

# 🎨 STEP 10: Deploy React Frontend

Inside frontend:

```bash
npm install
npm run build
```

Copy build files:

```bash
sudo cp -r build/* /var/www/html/
```

---

# 🔥 FINAL ARCHITECTURE

```text
User → Nginx (port 80)
        ↓
   React Frontend (/)
        ↓
   /api → Node.js backend (5000 internal)
```

---

# 🚀 STEP 11: Open Browser

Now visit:

```text
http://EC2-PUBLIC-IP
```

---

# 🔒 IMPORTANT SECURITY POINT

Now backend is NOT exposed publicly.

❌ No need:

* port 5000 in inbound rules

Only:

* 80 (HTTP)
* 443 (HTTPS)

---

# ⚡ WHY WE USE NGINX (VIVA READY)

> Nginx is used as a reverse proxy to route frontend and backend traffic, hide backend ports, improve security, and handle high traffic efficiently.

---

# 🧠 TRICKY VIVA QUESTIONS

## ❓ Why not use port 5000 directly?

Because it exposes backend publicly and is insecure.

---

## ❓ What is proxy_pass?

It forwards request from Nginx to backend server.

---

## ❓ What happens if Nginx stops?

Frontend stops working but backend may still run.

---

## ❓ Can Nginx handle multiple apps?

Yes using different routes or subdomains.

---

# ⚡ ONE-LINE FINAL ANSWER

> We use Nginx in MERN deployment as a reverse proxy to route frontend requests to static files and backend API requests to Node.js server while keeping backend ports hidden and secure.

---

If you want next, I can give:
✔ MERN deployment viva Q&A sheet
✔ AWS EC2 + Nginx diagram (very important for exams)
✔ Troubleshooting common errors (502, gateway, etc.)

Just tell 👍
