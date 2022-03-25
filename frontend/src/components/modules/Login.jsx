import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const LoginBox = () => {
	let {loginUser} = useContext(AuthContext)
	return(
		<section className='login-window'>
			<div className='box'>
				<div className='service-icon'>
					<h3>サービスのアイコン</h3>
				</div>
				<form onSubmit={loginUser}>
					<div className='input-group'>
						<input
							type="text"
							name="username"
							className="login-input"
							placeholder="ユーザーネーム"/>
					</div>
					<div className='input-group'>
						<input
							type="password"
							name="password"
							className="login-input"
							placeholder="パスワード"/>
					</div>

					<div className='buttons-group'>
						<button type="submit" className="signup-btn">
							ログイン
						</button>
						<Link to="/signup" id="to-signup">新規登録</Link>
					</div>
				</form>
			</div>
		</section>
	);
}
export default LoginBox;