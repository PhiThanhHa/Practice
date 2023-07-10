import classNames from 'classnames/bind';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './LoginHome.module.scss';

const urlImgLogin = require('../../../assets/img/login-bg-min.82ab1ba5c306d5db59d5.jpg');

const cx = classNames.bind(styles);

function LoginHome() {
    return (
        <div className={cx('container__login')}>
            <div className={cx('container__login-box')}>
                <div className={cx('container__login-box-content')}>
                    <div className={cx('container__login-box-form')}>
                        <a href="#" className={cx('container__login--box-close-link')}>
                            <i class="fa-solid fa-xmark"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginHome;
