import React from 'react';

const CommentOnTravaille = () => (
  <div style={{padding:'8px 0 24px',fontFamily:'Inter,system-ui,sans-serif'}}>
    <div style={{marginBottom:28,paddingBottom:16,borderBottom:'1px solid rgba(201,168,76,0.25)'}}>
      <div style={{fontSize:10,fontWeight:700,letterSpacing:'0.12em',color:'#c9a84c',textTransform:'uppercase',marginBottom:4}}>Comment on travaille</div>
      <div style={{fontSize:13,color:'#94a3b8'}}>4 actions concrètes. Vous n'avez rien à faire.</div>
    </div>
    {[
      {icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,title:'On trouve vos prospects',desc:"On identifie les entreprises et décideurs qui correspondent exactement à votre ICP : ceux qui ont un besoin réel, maintenant.",tools:'Clay · Apollo · LinkedIn · Crunchbase'},
      {icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>,title:"On leur écrit. Vous ne touchez à rien.",desc:'Séquences personnalisées, testées, optimisées. Vous sortez de la prospection. Le système travaille pendant que vous gérez votre business.',tools:'Instantly · LinkedIn outreach · A/B testing continu'},
    ].map((s,i)=>(
      <div key={i} style={{display:'grid',gridTemplateColumns:'44px 1fr'}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <div style={{width:44,height:44,borderRadius:10,background:'rgba(201,168,76,0.1)',border:'1.5px solid rgba(201,168,76,0.3)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>{s.icon}</div>
          <div style={{width:2,flex:1,minHeight:16,background:'rgba(201,168,76,0.2)'}}/>
        </div>
        <div style={{padding:'0 0 28px 16px'}}>
          <div style={{fontSize:16,fontWeight:700,color:'#f7f7f7',marginBottom:5,lineHeight:1.3}}>{s.title}</div>
          <div style={{fontSize:12,color:'#94a3b8',lineHeight:1.6,marginBottom:8}}>{s.desc}</div>
          <div style={{fontSize:10,color:'rgba(201,168,76,0.55)',letterSpacing:'0.03em'}}>{s.tools}</div>
        </div>
      </div>
    ))}
    <div style={{border:'1px dashed rgba(201,168,76,0.35)',borderRadius:10,padding:'14px 16px',margin:'0 0 28px 60px',position:'relative'}}>
      <div style={{position:'absolute',top:-10,left:14,background:'#0d1b2e',padding:'0 8px',fontSize:9,fontWeight:700,letterSpacing:'0.12em',color:'#c9a84c',textTransform:'uppercase'}}>Automatisation : tourne seul 24h/24</div>
      {[
        ['Relances automatiques','chaque prospect reçoit la bonne séquence au bon moment, sans intervention'],
        ['Enrichissement continu','les données prospects se mettent à jour en temps réel'],
        ['Routing automatique','chaque réponse est triée, scorée et routée sans action manuelle'],
        ['Reporting hebdo','tableau de bord mis à jour automatiquement, vous lisez les résultats sans les produire'],
      ].map(([bold,rest],i)=>(
        <div key={i} style={{display:'flex',alignItems:'flex-start',gap:8,marginBottom:i<3?8:0}}>
          <div style={{width:6,height:6,borderRadius:'50%',background:'#c9a84c',flexShrink:0,marginTop:5}}/>
          <div style={{fontSize:12,color:'#94a3b8',lineHeight:1.5}}><span style={{color:'#f7f7f7',fontWeight:600}}>{bold}</span> : {rest}</div>
        </div>
      ))}
    </div>
    <div style={{width:2,height:24,background:'rgba(201,168,76,0.2)',margin:'0 0 0 21px'}}/>
    {[
      {icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,title:'On filtre. Vous recevez un brief.',desc:'Chaque réponse qualifiée. Vous ne recevez que les prospects avec un budget, un décideur, un timing. Brief complet avant chaque call.',tools:'HubSpot · Scoring · Routing automatique',green:false},
      {icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9fe1cb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,title:'Le système reste chez vous',desc:"À la fin de la mission, tout vous est remis : séquences, bases de contacts, workflows, playbook. Vous l'opérez seul ou continuez avec nous.",tools:'Documentation · Playbook · Formation équipe',green:true},
    ].map((s,i)=>(
      <div key={i} style={{display:'grid',gridTemplateColumns:'44px 1fr'}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <div style={{width:44,height:44,borderRadius:10,background:s.green?'rgba(15,74,58,0.4)':'rgba(201,168,76,0.1)',border:s.green?'1.5px solid #9fe1cb':'1.5px solid rgba(201,168,76,0.3)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>{s.icon}</div>
          {!s.green&&<div style={{width:2,flex:1,minHeight:16,background:'rgba(201,168,76,0.2)'}}/>}
        </div>
        <div style={{padding:'0 0 28px 16px'}}>
          <div style={{fontSize:16,fontWeight:700,color:s.green?'#9fe1cb':'#f7f7f7',marginBottom:5,lineHeight:1.3}}>{s.title}</div>
          <div style={{fontSize:12,color:'#94a3b8',lineHeight:1.6,marginBottom:8}}>{s.desc}</div>
          <div style={{fontSize:10,color:s.green?'rgba(159,225,203,0.5)':'rgba(201,168,76,0.55)',letterSpacing:'0.03em'}}>{s.tools}</div>
        </div>
      </div>
    ))}
    <div style={{background:'rgba(201,168,76,0.07)',border:'1.5px solid rgba(201,168,76,0.3)',borderRadius:10,padding:'16px 20px',display:'flex',alignItems:'center',gap:16,marginTop:8}}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0}}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      <div>
        <div style={{fontSize:13,fontWeight:700,color:'#c9a84c',marginBottom:4}}>Votre seul rôle dans tout ça</div>
        <div style={{fontSize:12,color:'#94a3b8',lineHeight:1.5}}>Valider l'ICP en semaine 1. Puis <span style={{color:'#f7f7f7',fontWeight:600}}>prendre les rendez-vous qu'on vous livre — avec le brief complet</span>. C'est tout.</div>
      </div>
    </div>
  </div>
);

export default CommentOnTravaille;
