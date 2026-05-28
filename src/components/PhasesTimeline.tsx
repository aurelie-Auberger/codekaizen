import React from 'react';

const steps = [
  {
    num: '01',
    timing: 'J+0 à J+15',
    title: 'Diagnostic & Architecture',
    desc: "On identifie votre ICP réel, on cartographie les leviers bloquants. On pose la fondation technique : stack, CRM, domaines, scoring SQL.",
  },
  {
    num: '02',
    timing: 'J+15 à J+35',
    title: 'Déploiement & Campagnes',
    desc: "500 prospects ciblés, enrichis, scorés. Séquences email et LinkedIn déployées, personnalisation niveau 3, A/B testing systématique.",
  },
  {
    num: '03',
    timing: 'J+35 à J+90',
    title: 'Qualification & Transmission',
    desc: "Chaque réponse filtrée, brief complet livré avant chaque call. À J+90 : le système vous appartient intégralement — séquences, bases, playbook, formation.",
  },
];

const PhasesTimeline = () => (
  <div style={{ padding: '8px 0 24px', fontFamily: 'Inter,system-ui,sans-serif' }}>
    {steps.map((p, i) => {
      const isLast = i === steps.length - 1;
      return (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '52px 1fr', position: 'relative' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: '#c9a84c',
                border: '1.5px solid #c9a84c',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 11,
                fontWeight: 700,
                color: '#0d1b2e',
                flexShrink: 0,
              }}
            >
              {p.num}
            </div>
            {!isLast && (
              <div
                style={{
                  width: 1.5,
                  flex: 1,
                  background: 'rgba(201,168,76,0.25)',
                  minHeight: 32,
                }}
              />
            )}
          </div>
          <div style={{ padding: '8px 0 32px 18px' }}>
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: '#c9a84c',
                textTransform: 'uppercase',
                marginBottom: 5,
                opacity: 0.85,
              }}
            >
              Étape {p.num} · {p.timing}
            </div>
            <div
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: '#f7f7f7',
                marginBottom: 6,
                lineHeight: 1.3,
              }}
            >
              {p.title}
            </div>
            <div style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.7 }}>{p.desc}</div>
          </div>
        </div>
      );
    })}
  </div>
);

export default PhasesTimeline;
