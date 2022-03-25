import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const Header = () => {
	let {user, logoutUser} = useContext(AuthContext)

	return(
		<>
			{user ? (
				<header className="header">
					<div className="header-Name">
						<h1>TITLE</h1>
					</div>
					<div className="header-Nav">
						<ul>
							<li>
								<Link to="/">HOME</Link>
							</li>
							<li>
								<Link to="/timer">TIMER</Link>
							</li>
							<li>
								<Link to="/menu2">MENU2</Link>
							</li>
						</ul>
					</div>
					<div className='header-right'>
						<div className="user-Icon">
							<p>アイコン</p>
						</div>
						<div className="sign-Up">
							<p onClick={logoutUser}>ログアウト</p>
						</div>
					</div>
			</header>
			): (
				<header className="header">
					<div className="header-Name">
						<h1><Link to="/">TITLE</Link></h1>
					</div>
					<div className='header-right'>
						<div className="sign-Up">
							<Link to="/login">ログイン</Link>
						</div>
					</div>
				</header>
			)}
		</>
	);
}

export default Header;