import logo from '../components/image/logo.png'


const Header = ()=> {


  const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#EFEBE9'
  };


    return(
        
        
        
    <header>
        <img src={logo} alt="Logo" style={{ height: '120px', border:'5px solid white', padding:'5px' }} />
      <div style={logoStyle}>ABUJA COFFEE DAPP</div>
    </header>
    )
}

export default Header