import classNames from 'classnames/bind';
import styles from './LoginHome.module.scss';

const urlImgLogin = require('../../../assets/img/login-bg-min.82ab1ba5c306d5db59d5.jpg');

const cx = classNames.bind(styles);

function LoginHome() {
    return (
        <div className={cx('container__login')}>
            <div className={cx('container__login-box')}>
                <img src={urlImgLogin} alt="" />
            </div>
        </div>
    );
}

export default LoginHome;
