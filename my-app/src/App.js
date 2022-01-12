import './App.css'; 
function App() {
  return (
  
    <div style={{padding:'10px',display:'flex',height:'100%',width:'300%',backgroundColor:'#DEEAE8'}}>
     <div style={{margin:'2px',height:'100%',width:'300px'}}>
     <ul className="App">
        <hl><h4>FP Inventory</h4></hl>
        <li>Adele  (20)</li>
        <li>Agnes  (60)</li>
        <li>Billy  (10)</li>
        <li>Bob  (8)</li>
        <li>Calvin  (20)</li>
        <li>Christina  (3)</li>
        <li>Cindy  (11)</li>
      </ul>
     </div>
     <div style={{marginLeft:'50px',margin:'2px',height:'100%',width:'300px'}}>
     <ul className="App">
     <hl><h4>CGMD Inventory</h4></hl>
        <li>Adele</li>
        <li>Agnes</li>
        <li>Billy</li>
        <li>Bob</li>
        <li>Calvin</li>
        <li>Christina</li>
        <li>Cindy</li>
     </ul>
     </div>
    </div>
  );
}

export default App;
