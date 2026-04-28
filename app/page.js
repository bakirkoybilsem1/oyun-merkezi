'use client';

const OYUNLAR = [
  {
    isim: "Rüzgar ve Alp Çınar'ın Demir Araba Oyunu",
    slug: "ruzgar-ve-alp-cinar-in-demir-araba-oyunu",
    emoji: "🏎️",
    renk: ["#FF6B6B", "#FF8E53"],
  },
  // Buraya yeni oyunlar ekleyebilirsin:
  // { isim: "Oyun Adı", slug: "oyun-slug", emoji: "🎮", renk: ["#4ECDC4", "#44A08D"] },
];

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #0f0c29, #302b63, #24243e)',
      fontFamily: "'Fredoka One', cursive",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px',
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet" />

      <h1 style={{
        color: 'white',
        fontSize: 'clamp(2rem, 6vw, 3.5rem)',
        textAlign: 'center',
        marginBottom: 12,
        textShadow: '0 4px 24px rgba(240,147,251,0.5)',
      }}>
        🎮 BİLSEM Oyun Merkezi
      </h1>
      <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 48, fontSize: '1.1rem' }}>
        Oynamak istediğin oyunu seç!
      </p>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 24,
        justifyContent: 'center',
        maxWidth: 900,
        width: '100%',
      }}>
        {OYUNLAR.map((oyun) => (
          <a
            key={oyun.slug}
            href={`/${oyun.slug}`}
            style={{ textDecoration: 'none', width: '100%', maxWidth: 400 }}
          >
            <div style={{
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 20,
              padding: '28px 32px',
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              cursor: 'pointer',
              transition: 'transform 0.2s, background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.13)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
            >
              {/* Emoji kutusu */}
              <div style={{
                width: 64,
                height: 64,
                borderRadius: 16,
                background: `linear-gradient(135deg, ${oyun.renk[0]}, ${oyun.renk[1]})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 32,
                flexShrink: 0,
                boxShadow: `0 8px 24px ${oyun.renk[0]}55`,
              }}>
                {oyun.emoji}
              </div>

              {/* Yazılar */}
              <div style={{ flex: 1 }}>
                <div style={{
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  lineHeight: 1.3,
                  marginBottom: 6,
                }}>
                  {oyun.isim}
                </div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  background: `linear-gradient(135deg, ${oyun.renk[0]}, ${oyun.renk[1]})`,
                  color: 'white',
                  padding: '4px 14px',
                  borderRadius: 50,
                  fontSize: '0.85rem',
                  fontWeight: 700,
                }}>
                  ▶ Oyuna giriş yapmak için tıklayınız
                </div>
              </div>

              {/* Ok */}
              <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.5rem', flexShrink: 0 }}>
                →
              </div>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
