import React from 'react';
import { Link } from 'react-router-dom';

class SignUpBox extends React.Component{

	constructor(props) {
		super(props);
		this.state = {};
	}

	render(){
		return(
			<section className='signup-window'>
				<div className='box'>
					<div className='service-icon'>
						<h3>サービスのアイコン</h3>
					</div>
					<div className='input-group'>
						{/* <label htmlFor='username'>ユーザーネーム</label> */}
						<input
							type="text"
							name="username"
							className="signup-input"
							placeholder="ユーザーネーム"/>
					</div>
					<div className='input-group'>
						{/* <label htmlFor='password'>パスワード</label> */}
						<input
							type="password"
							name="password"
							className="signup-input"
							placeholder="パスワード"/>
					</div>

					<div className='buttons-group'>
						<button type="button" className="signup-btn">
							新規登録
						</button>
						<Link to="/login" id="to-login">ログイン</Link>
					</div>
				</div>
			</section>
		);
	}
}
export default SignUpBox;