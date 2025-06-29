import logo from '../components/image/logo.png'


const Header = ()=> {


//     const headerStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '20px',
//     backgroundColor: '#f5f5f5',
//     borderBottom: '1px solid #ccc',
//     width:"100%",
//     margin: '0'
//   };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#EFEBE9'
  };

//   const navStyle = {
//     display: 'flex',
//     gap: '15px',
//     alignItems: 'center'
//   };

//   const linkStyle = {
//     textDecoration: 'none',
//     color: '#333',
//     fontSize: '16px'
//   };

//   const iconStyle = {
//     fontSize: '20px',
//     marginLeft: '10px',
//     cursor: 'pointer'
//   };

    return(
        
        
        
    <header>
        <img src={logo} alt="Logo" style={{ height: '120px', border:'5px solid white', padding:'5px' }} />
      <div style={logoStyle}>ABUJA COFFEE DAPP</div>
    </header>
    )
}

export default Header