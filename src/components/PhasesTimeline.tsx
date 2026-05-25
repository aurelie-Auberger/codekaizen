import React from 'react';

const PhasesTimeline = () => (
  <div style={{padding:'8px 0 24px',fontFamily:'Inter,system-ui,sans-serif'}}>
    <div style={{marginBottom:28,paddingBottom:16,borderBottom:'1px solid rgba(201,168,76,0.25)'}}>
      <div style={{fontSize:10,fontWeight:700,letterSpacing:'0.12em',color:'#c9a84c',textTransform:'uppercase',marginBottom:4}}>Les 6 phases</div>
      <div style={{fontSize:13,color:'#94a3b8'}}>De l'ICP au deal — séquence stricte, aucune étape sautée</div>
    </div>
    {[
      {num:'01',gold:true,timing:'J+0 · 5 jours ouvrés',title:'Diagnostic ICP',desc:"On identifie qui achète vraiment, pourquoi, et ce qui bloque votre acquisition aujourd'hui.",pills:[] as string[]},
      {num:'02',timing:'J+5 · 2 semaines',title:'Architecture du système',desc:"Stack, CRM, domaines d'envoi, scoring SQL — la fondation technique avant le premier envoi.",pills:['Clay','HubSpot','Instantly']},
      {num:'03',timing:'J+15 · continu',title:'Sourcing des cibles',desc:'500 prospects T1 identifiés, enrichis, scorés sur 8 variables comportementales.',pills:['Apollo','LinkedIn SN','Crunchbase']},
      {num:'04',timing:"J+21 · jusqu'aux résultats",title:'Campagnes outbound',desc:'Séquences email + LinkedIn, personnalisation niveau 3, A/B testing systématique.',pills:['Instantly','Lemlist','Smartlead']},
      {num:'05',gold:true,timing:'J+35 à J+90 · récurrent',title:'Qualification — vous closez',accent:true,desc:'Chaque réponse filtrée. Brief complet livré avant chaque call : budget, autorité, urgence, contexte.',pills:['Budget confirmé','Décideur identifié','Timing défini']},
    ].map((p:any,i)=>(
      <div key={i} style={{display:'grid',gridTemplateColumns:'52px 1fr',position:'relative'}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <div style={{width:40,height:40,borderRadius:'50%',background:p.gold?'#c9a84c':'#0d1b2e',border:`1.5px solid ${p.gold?'#c9a84c':'rgba(201,168,76,0.4)'}`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:11,fontWeight:700,color:p.gold?'#0d1b2e':'#c9a84c',flexShrink:0}}>{p.num}</div>
          <div style={{width:1.5,flex:1,background:p.num==='05'?'repeating-linear-gradient(to bottom,rgba(201,168,76,0.35) 0px,rgba(201,168,76,0.35) 4px,transparent 4px,transparent 10px)':'rgba(201,168,76,0.2)',minHeight:20}}/>
        </div>
        <div style={{padding:'8px 0 24px 18px'}}>
          <div style={{fontSize:9,fontWeight:700,letterSpacing:'0.1em',color:'#c9a84c',textTransform:'uppercase',marginBottom:3,opacity:0.8}}>{p.timing}</div>
          <div style={{fontSize:15,fontWeight:600,color:p.accent?'#c9a84c':'#f7f7f7',marginBottom:4,lineHeight:1.3}}>{p.title}</div>
          <div style={{fontSize:12,color:'#94a3b8',lineHeight:1.6}}>{p.desc}</div>
          {p.pills.length>0&&<div style={{display:'flex',flexWrap:'wrap',gap:5,marginTop:7}}>{p.pills.map((pl:string,j:number)=><span key={j} style={{fontSize:10,color:p.accent?'#c9a84c':'#94a3b8',border:`1px solid ${p.accent?'rgba(201,168,76,0.5)':'rgba(201,168,76,0.18)'}`,borderRadius:20,padding:'2px 9px'}}>{pl}</span>)}</div>}
        </div>
      </div>
    ))}
    <div style={{background:'rgba(15,74,58,0.25)',border:'1.5px solid rgba(159,225,203,0.4)',borderRadius:10,padding:'16px 18px',margin:'4px 0 24px',display:'grid',gridTemplateColumns:'1fr auto',gap:12,alignItems:'center'}}>
      <div>
        <div style={{fontSize:10,fontWeight:700,letterSpacing:'0.1em',color:'#9fe1cb',textTransform:'uppercase',marginBottom:5}}>Le système vous appartient quand ?</div>
        <div style={{fontSize:13,color:'#f7f7f7',lineHeight:1.5}}>À la fin de la mission — <span style={{color:'#c9a84c',fontWeight:600}}>sans condition, sans surcoût</span>. Séquences, bases de contacts, workflows, playbook : tout vous est remis. Vous pouvez l'opérer seul ou continuer avec nous.</div>
      </div>
      <div style={{textAlign:'center',borderLeft:'1px solid rgba(159,225,203,0.2)',paddingLeft:16,flexShrink:0}}>
        <div style={{fontSize:28,fontWeight:700,color:'#c9a84c',lineHeight:1}}>J+90</div>
        <div style={{fontSize:10,color:'#94a3b8',marginTop:3}}>transmission<br/>complète</div>
      </div>
    </div>
    <div style={{display:'grid',gridTemplateColumns:'52px 1fr',position:'relative'}}>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <div style={{width:40,height:40,borderRadius:'50%',background:'#0f4a3a',border:'1.5px solid #9fe1cb',display:'flex',alignItems:'center',justifyContent:'center',fontSize:11,fontWeight:700,color:'#9fe1cb',flexShrink:0}}>06</div>
      </div>
      <div style={{padding:'8px 0 24px 18px'}}>
        <div style={{fontSize:9,fontWeight:700,letterSpacing:'0.1em',color:'#9fe1cb',textTransform:'uppercase',marginBottom:3,opacity:0.8}}>J+90 · inclus dans la mission</div>
        <div style={{fontSize:15,fontWeight:600,color:'#f7f7f7',marginBottom:4,lineHeight:1.3}}>Transmission & autonomie</div>
        <div style={{fontSize:12,color:'#94a3b8',lineHeight:1.6}}>Documentation, playbook, formation équipe. Le système vous appartient intégralement. Aucune dépendance.</div>
        <div style={{display:'flex',flexWrap:'wrap',gap:5,marginTop:7}}>{['Playbook PDF','Workflows N8N','ICP fiche','Formation'].map((pl,j)=><span key={j} style={{fontSize:10,color:'#9fe1cb',border:'1px solid rgba(159,225,203,0.4)',borderRadius:20,padding:'2px 9px'}}>{pl}</span>)}</div>
      </div>
    </div>
    <div style={{paddingTop:14,borderTop:'1px solid rgba(201,168,76,0.15)',display:'flex',justifyContent:'space-around'}}>
      {[['J+21','Premiers retours'],['J+45','Pipeline actif'],['J+90','Système transmis']].map(([n,l],i)=>(
        <div key={i} style={{textAlign:'center'}}>
          <div style={{fontSize:16,fontWeight:700,color:'#c9a84c'}}>{n}</div>
          <div style={{fontSize:10,color:'#94a3b8',marginTop:2}}>{l}</div>
        </div>
      ))}
    </div>
  </div>
);

export default PhasesTimeline;
