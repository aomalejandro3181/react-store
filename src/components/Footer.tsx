const Footer = () => {
  return (
    <>
      <div>
        <div className="border-t mx-20 mb-10"></div>
        <p className="text-center text-xs font-normal mb-10">
          Aceptamos los siguientes métodos de pago
        </p>
        <div className="flex flex-row justify-center gap-1 md:gap-10 lg:gap-12">
          <div>
            <img
              width={55}
              height={55}
              alt="visa"
              src="https://static.wixstatic.com/media/84770f_27001c40036842889a78a72766ad4700~mv2.png/v1/fill/w_110,h_66,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Visa.png"
            />
          </div>
          <div>
            <img
              src="https://static.wixstatic.com/media/c837a6_e8798fcfdaf144478a5c7da1ba28ff2c~mv2.png/v1/fill/w_110,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brand-mastercard%403x.png"
              width={55}
              height={55}
              alt="mastercard"
            />
          </div>
          <div>
            <img
              src="https://static.wixstatic.com/media/c837a6_2bd3e20d1e214eccb5e106fc6d1f535d~mv2.png/v1/fill/w_110,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brand-amex%403x.png"
              width={55}
              height={55}
              alt="amex"
            />
          </div>
          <div>
            <img
              src="https://static.wixstatic.com/media/c837a6_52115f99af28419d95a951f226e32e2b~mv2.png/v1/fill/w_110,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brand-chinaunionpay%403x.png"
              width={55}
              height={55}
              alt="chinaunionpay"
            />
          </div>
          <div>
            <img
              src="https://static.wixstatic.com/media/c837a6_9378fbd3ef8c470bb89aee12ecbd2209~mv2.png/v1/fill/w_110,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brand-jcb%403x.png"
              width={55}
              height={55}
              alt="jcb"
            />
          </div>
          <div>
            <img
              src="https://static.wixstatic.com/media/84770f_70555dcb450a415d80322cb8d7e82a33~mv2.png/v1/fill/w_104,h_76,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Diners.png"
              width={55}
              height={55}
              alt="Diners"
            />
          </div>
          <div>
            <img
              src="https://static.wixstatic.com/media/84770f_14f105815c3f47bf9001990706915501~mv2.png/v1/fill/w_110,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Discover.png"
              width={55}
              height={55}
              alt="Discover"
            />
          </div>
          <div>
            <img
              src="https://static.wixstatic.com/media/84770f_8445424a46ca49f39359bf19d4a3e537~mv2.png/v1/fill/w_110,h_76,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PayPal.png"
              width={55}
              height={55}
              alt="PayPal"
            />
          </div>
        </div>
        <div>
          <p className="text-sm text-center p-6">
            © 2035 Creado por Alejandro Olivar.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
