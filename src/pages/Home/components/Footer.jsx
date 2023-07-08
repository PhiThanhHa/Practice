function Footer() {
    return (
        <div className="footer">
            <div className="grid">
                <div className="footer__inner">
                    <a href="/" className="footer__logo">
                        <img
                            src="https://www.mektoube.fr/images/logo-white.png"
                            data-src="/images/logo-white.png"
                            alt=""
                            width="159"
                            height="22"
                            className="ls-is-cached lazyloaded"
                        />
                    </a>
                    <div className="socials footer__socials">
                        <ul>
                            <li>
                                <a target="_blank" href="https://www.facebook.com/MEKTOUBE">
                                    <img
                                        src="	https://www.mektoube.fr/images/svg/Facebook-white.svg"
                                        data-src="/images/svg/Facebook-white.svg"
                                        className="ico-facebook ls-is-cached lazyloaded"
                                        alt="Facebook"
                                    />
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://twitter.com/mektoube?lang=fr">
                                    <img
                                        src="	https://www.mektoube.fr/images/svg/Twitter.svg"
                                        data-src="/images/svg/Twitter.svg"
                                        className="ico-tumblr ls-is-cached lazyloaded"
                                        alt="twitter"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <nav className="nav nav--footer">
                        <ul>
                            <li>
                                <a href="/temoignages">Témoignages</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://mektoube-tribune.fr/">
                                    Tribune
                                </a>
                            </li>
                            <li>
                                <a href="/contact">Contact</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://presse.mektoube.fr/">
                                    Presse
                                </a>
                            </li>
                            <li>
                                <a href="/mentions-legales">Mentions légales</a>
                            </li>
                            <li>
                                <a href="/charte-vie-privee">Vie privée</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://aide.mektoube.fr/">
                                    Aide
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://blog.mektoube.fr/">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="/cgu">CGU</a>
                            </li>
                        </ul>
                    </nav>
                    <p className="copyright">©mektoube.fr - 2023</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
