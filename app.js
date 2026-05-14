// أداة التوجيه التقني - ورشة مشهور
const TawjihTech = () => {
  return (
    <div style={{ border: '2px solid #1a73e8', borderRadius: '15px', padding: '15px' }}>
      <h2 style={{ color: '#1a73e8' }}>منصة Tawjih PRO - قسم الميكانيك</h2>
      <p>مرحباً بك في قسم التوجيه الخاص ببرمجة السيارات (Atelier Machhour)</p>
      
      {/* أدوات التشخيص التي برمجتها سابقاً */}
      <div style={{ display: 'grid', gap: '10px' }}>
        <button style={{ padding: '12px', backgroundColor: '#e8f0fe', border: '1px solid #4285f4', borderRadius: '8px' }}>
          دليل أكواد الخطأ DTC
        </button>
        <button style={{ padding: '12px', backgroundColor: '#e8f0fe', border: '1px solid #4285f4', borderRadius: '8px' }}>
          توجيه لتعلم برمجة الـ ECU
        </button>
      </div>
    </div>
  );
};
