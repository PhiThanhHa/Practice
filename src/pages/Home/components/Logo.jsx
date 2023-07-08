const urlImgLogoBigSize = require('../../../assets/img/section-logos-bg.webp');
const urlImgLogo1 = require('../../../assets/img/logo-1.webp');
const urlImgLogo2 = require('../../../assets/img/logo-2.webp');
const urlImgLogo3 = require('../../../assets/img/logo-3.webp');
const urlImgLogo4 = require('../../../assets/img/logo-4.webp');
const urlImgLogo5 = require('../../../assets/img/logo-5.webp');
const urlImgLogo6 = require('../../../assets/img/logo-6.webp');

function Logo() {
    return (
        <section className="section section--logos">
            <img
                src={urlImgLogoBigSize}
                data-src={urlImgLogoBigSize}
                alt=""
                className="logo-bg ls-is-cached lazyloaded"
            />
            <div className="grid">
                <div className="section__inner">
                    <div className="section__body">
                        <h2 className="underlined">
                            <p>Ils parlent de Mektoube</p>
                            <span>Découvrez ce qu’ils en ont pensé !</span>
                        </h2>
                        <ul className="list-logos">
                            <li>
                                <img
                                    src={urlImgLogo1}
                                    data-src={urlImgLogo1}
                                    alt=""
                                    width="134"
                                    height="30"
                                    className="ls-is-cached lazyloaded"
                                />
                            </li>
                            <li>
                                <img
                                    src={urlImgLogo2}
                                    data-src={urlImgLogo2}
                                    alt=""
                                    width="103"
                                    height="28"
                                    className="ls-is-cached lazyloaded"
                                />
                            </li>
                            <li>
                                <img
                                    src={urlImgLogo3}
                                    data-src={urlImgLogo3}
                                    alt=""
                                    width="104"
                                    height="29"
                                    className="ls-is-cached lazyloaded"
                                />
                            </li>
                            <li>
                                <img
                                    src={urlImgLogo4}
                                    data-src={urlImgLogo4}
                                    alt=""
                                    width="89"
                                    height="40"
                                    className="ls-is-cached lazyloaded"
                                />
                            </li>
                            <li>
                                <img
                                    src={urlImgLogo5}
                                    data-src={urlImgLogo5}
                                    alt=""
                                    width="104"
                                    height="31"
                                    className="ls-is-cached lazyloaded"
                                />
                            </li>
                            <li>
                                <img
                                    src={urlImgLogo6}
                                    data-src={urlImgLogo6}
                                    alt=""
                                    width="96"
                                    height="36"
                                    className="ls-is-cached lazyloaded"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="section__bg"></div>
        </section>
    );
}

export default Logo;
