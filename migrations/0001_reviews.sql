-- Customer reviews submitted on /reviews/write. Every review starts as
-- 'pending' and only shows on the site once approved in /admin/reviews.
CREATE TABLE IF NOT EXISTS reviews (
  id           TEXT PRIMARY KEY,
  slug         TEXT NOT NULL UNIQUE,
  status       TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  rating       INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  title        TEXT NOT NULL,
  body         TEXT NOT NULL,
  name         TEXT NOT NULL,
  email        TEXT NOT NULL,
  company      TEXT,
  website      TEXT,
  country      TEXT,
  service      TEXT,
  reply        TEXT,
  ip           TEXT,
  user_agent   TEXT,
  created_at   TEXT NOT NULL,
  updated_at   TEXT NOT NULL,
  approved_at  TEXT
);

CREATE INDEX IF NOT EXISTS idx_reviews_status_created ON reviews (status, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_reviews_ip_created ON reviews (ip, created_at);
