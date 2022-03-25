import React, {useState, useEffect, useContext} from 'react';
import AuthContext from '../../context/AuthContext';

const Menu2 = () =>  {
	let [studies, setStudies] = useState([])
	let {authTokens} = useContext(AuthContext)
	useEffect(() => {

	}, [])

	let getStudies = async () => {
		let response = await fetch('http://127.0.0.1:8000/api/studies/',{
			method:'GET',
			headers:{
				'Content-Type':'application/json',
				'Authorization':'Bearer' + String(authTokens.access)
			}
		})
		let data = response.json()
		setStudies(data)
	}
	return(
		<>
			<div className='mainText'>Menu2 Test</div>
			<ul>
				{studies.map(study => (
					<li key = {studies.id}>{studies.study_time}秒</li>
				))}
			</ul>
		</>
	);
}

export default Menu2;