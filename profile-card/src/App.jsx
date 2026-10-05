function App() {
  const yourName = "Maheshwari ";
  const myAim = "Software Engineer";
  const funFact = "I am talkative";

  return (
     <div style={{
      minHeight: '100vh',
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#0f172a", // Sleek dark slate background
      margin: 0,
      fontFamily: 'system-ui, -apple-system, sans-serif'
     }}>

      <div style={{
        backgroundColor: "#ffffff",
        padding: "30px",
        borderRadius: "16px",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
        maxWidth: "350px",
        width: "100%",
        textAlign: "center",
        borderTop: "8px solid #14f2f9" // Keeps your bright cyan color as an accent bar
      }}>
         <h1 style={{ 
          color: "#1e293b", 
          fontSize: "24px", 
          margin: "0 0 8px 0" 
        }}> {yourName}
        </h1>

         <p style={{ 
          color: "#0284c7", 
          fontWeight: "600", 
          fontSize: "14px", 
          textTransform: "uppercase", 
          letterSpacing: "0.5px",
          margin: "0 0 20px 0"
        }}> {myAim} </p>

         <hr style={{
           border: "0", 
           borderTop: "1px solid #e2e8f0", 
           margin: "0 0 20px 0" }} />
        
          <p style={{ 
          color: "#475569", 
          fontSize: "15px", 
          lineHeight: "1.5",
          margin: "0 0 15px 0" 
        }}>
          I'm currently learning React!
        </p>

        <div style={{
          backgroundColor: "#f1f5f9",
          padding: "12px",
          borderRadius: "8px",
          fontSize: "14px",
          color: "#334155"
        }}>
         Fun Fact: {funFact}
        </div>

      </div>
      
     </div>
     
  )
}

export default App