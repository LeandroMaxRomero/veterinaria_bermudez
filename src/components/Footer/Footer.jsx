import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container__footer">
        <div className="footer--superior">
          <div className="footer__info">
            <div className="container--logo">
              <svg width="107" height="109" viewBox="0 0 107 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M48.8686 67.4529C48.9199 67.3302 49.0531 67.2633 49.1821 67.2956L50.7228 67.7737C50.7775 67.7907 50.8228 67.8292 50.8484 67.8804C50.859 67.9016 50.866 67.9245 50.869 67.948L51.3917 72.0779C51.4082 72.2081 51.2922 72.3161 51.1635 72.2904C51.1511 72.2879 51.1385 72.2867 51.1258 72.2867H49.6568C49.3117 72.2867 48.9754 72.3954 48.6957 72.5974C48.3263 72.8642 48.0845 73.2725 48.0279 73.7246L47.9528 74.326C47.9499 74.3491 47.9394 74.3706 47.9229 74.387C47.9033 74.4067 47.8766 74.4177 47.8489 74.4177H46.1068C46.0195 74.4177 45.9579 74.3322 45.9855 74.2495L46.8267 72.3428L48.8686 67.4529Z" fill="#9168A4"/>
                <path d="M30.8999 31.6289V13.5713C30.8999 6.07607 36.976 0 44.4712 0H75.2589V31.6289H93.4287C100.924 31.6289 107 37.705 107 45.2002V76.3244H75.2589V94.8868C75.2589 102.382 69.1828 108.458 61.6876 108.458H30.8999V76.3244H13.5713C6.07607 76.3244 0 70.2484 0 62.7531V31.6289H30.8999Z" fill="white"/>
                <path d="M34.3768 73.184C34.5222 72.6387 34.8447 72.1572 35.2936 71.8152L35.4716 71.6796C35.6757 71.5241 35.8603 71.3446 36.0215 71.145L36.2504 70.8616C36.7174 70.2835 37.0769 69.6264 37.3119 68.9214L37.9659 66.9591L38.751 62.9214L39.2558 58.8276V57.2573L39.0875 55.2946L38.751 53.5561L38.5267 51.7615V50.3035L38.5828 48.9015L38.751 45.8732V41.2025C38.751 41.0292 38.7957 40.8589 38.8806 40.7078L39.1685 40.1961C39.2201 40.1043 39.2043 39.9894 39.1299 39.915C39.1021 39.8872 39.0678 39.8669 39.0301 39.8558L38.4474 39.6844C38.2394 39.6232 38.0246 39.5881 37.8079 39.58L36.105 39.5157C35.48 39.4921 34.8623 39.3731 34.2732 39.1627C33.8205 39.001 33.3883 38.7866 32.9855 38.524L32.3019 38.0781L30.8999 36.9004L29.7783 35.7227L29.6124 35.5347C29.2404 35.1131 29.2835 34.4692 29.7084 34.1009C29.7549 34.0606 29.805 34.0247 29.858 33.9935L30.9906 33.3272C31.453 33.0553 31.9342 32.8168 32.4306 32.6137L34.1525 31.9093L35.5987 31.3802C36.1427 31.1812 36.5795 30.7649 36.8043 30.231C36.8681 30.0793 36.9498 29.9357 37.0474 29.8032L37.3115 29.4447C37.5591 29.1087 37.8611 28.8164 38.2051 28.5799L38.5321 28.3551C38.5658 28.3319 38.6021 28.313 38.6404 28.2986C38.8671 28.2136 39.0009 27.9791 38.9589 27.7407L38.8792 27.2895C38.8686 27.229 38.8632 27.1678 38.8632 27.1064V26.5257L39.0531 24.9589C39.0717 24.8058 39.2167 24.7009 39.3679 24.7311C39.9951 24.8049 40.597 25.0217 41.1272 25.3648L41.2746 25.4602L42.1158 26.1331L42.707 26.5631C42.724 26.5754 42.7432 26.5844 42.7635 26.5895C42.8636 26.6145 42.9616 26.5417 42.9665 26.4386L43.0131 25.4602L43.0902 24.6892C43.1132 24.4587 43.1906 24.237 43.3158 24.0422L43.5145 23.7331C43.5887 23.6177 43.7041 23.5349 43.8372 23.5017C43.9904 23.4634 44.1526 23.4942 44.2811 23.586L44.7282 23.9053C44.8183 23.9697 44.9021 24.0426 44.9783 24.123L45.4391 24.6094C45.7281 24.9145 45.9974 25.2441 46.2392 25.5877C46.6998 26.2424 47.0751 26.9639 47.3444 27.7177L47.5047 28.1666C47.6879 28.6796 47.8335 29.2052 47.9403 29.7393L48.0089 30.0821C48.1549 30.8124 48.3734 31.5264 48.661 32.2134L49.2379 33.5917L50.4156 35.7227L51.5933 38.5267L52.0669 39.8293C52.1996 40.194 52.3014 40.5693 52.3713 40.951L52.9501 44.1123C52.9785 44.2676 53.0784 44.4006 53.2196 44.4712L55.9675 45.6488L59.671 47.6729C60.4149 48.0794 61.1102 48.5689 61.7437 49.132L62.8092 50.0791L63.9111 51.2458C64.4462 51.8124 64.9208 52.4333 65.3272 53.0983L65.9406 54.1021C66.3567 54.783 66.699 55.5063 66.9616 56.2598L67.4937 57.7869C67.7349 58.479 67.9077 59.1931 68.0096 59.9189L68.1326 60.7954C68.2472 61.6121 68.2714 62.4388 68.2048 63.2608L68.1368 64.0991L67.7302 66.1321C67.7026 66.2701 67.7093 66.4127 67.7497 66.5475C67.8178 66.7744 67.9765 66.9631 68.1884 67.0691L68.686 67.3178C68.9525 67.4511 69.2438 67.5274 69.5415 67.5419L71.3894 67.6321L73.1187 67.5615C73.7964 67.5338 74.4701 67.4448 75.1317 67.2954L75.8758 67.1274L76.7708 66.829C77.183 66.6916 77.5842 66.5234 77.9712 66.3259L82.3786 64.0752C82.5524 63.9865 82.7611 64.002 82.9198 64.1154C83.0071 64.1778 83.0731 64.2655 83.1088 64.3667L83.3905 65.1646L83.6699 66.2474C83.7825 66.6836 83.8565 67.129 83.891 67.5782L83.9323 68.1148C83.9818 68.7588 83.905 69.4063 83.7062 70.0209C83.4979 70.6647 83.16 71.2591 82.7134 71.7674L82.3511 72.1796C81.9611 72.6233 81.5208 73.0202 81.039 73.3621L80.0257 74.0812L79.6162 74.2957C79.1066 74.5627 78.5623 74.7576 77.999 74.875C77.6683 74.9439 77.3325 74.9857 76.995 75.0001L74.8663 75.0907L74.7141 75.0827C73.4051 75.0138 72.1182 74.7159 70.912 74.2026L70.0996 73.8569L66.2862 72.0624L65.8486 71.9165C65.1052 71.6687 64.2866 71.9244 63.8165 72.5513C63.6699 72.7468 63.4855 72.9107 63.2742 73.0334L62.678 73.3796C62.1344 73.6952 61.5382 73.9099 60.9181 74.0132L58.833 74.3607C58.8294 74.3613 58.8257 74.3616 58.8221 74.3616C58.7565 74.3616 58.7308 74.2766 58.7853 74.2402L59.9492 73.4644L60.8841 72.6584C61.3398 72.2655 61.707 71.7805 61.9615 71.2352C62.2243 70.6719 62.3606 70.0578 62.3606 69.4362V68.5097C62.3606 67.8521 62.2836 67.1968 62.1313 66.5571L62.0802 66.3422L61.8982 65.5332C61.6845 64.5835 61.628 63.6053 61.731 62.6373C61.8139 61.8581 61.9993 61.0932 62.2824 60.3625L63.1407 58.1476C63.4405 57.3739 63.5943 56.5513 63.5943 55.7215V55.4063C63.5943 54.8499 63.4992 54.2975 63.3132 53.7731L63.2831 53.6884C63.0815 53.1201 62.7663 52.5988 62.3568 52.1561C61.4378 51.1625 60.1163 50.6417 58.7666 50.7409L58.1908 50.7833C57.4709 50.8362 56.7804 51.0907 56.1982 51.5176C55.6789 51.8984 55.2635 52.4036 54.9901 52.9868L54.9323 53.1101C54.6901 53.6268 54.5512 54.1858 54.5234 54.7557L54.4751 55.7457C54.4608 56.0398 54.5085 56.3337 54.6152 56.6081L54.7242 56.8884C54.8036 57.0924 54.9416 57.2683 55.121 57.3938C55.3069 57.524 55.5285 57.5938 55.7555 57.5938H56.1791C56.4039 57.5938 56.6208 57.5106 56.7879 57.3602C56.9796 57.1876 57.0891 56.9418 57.0891 56.6838V56.0765C57.0891 55.7467 57.0123 55.4213 56.8648 55.1263L56.7745 54.9458C56.6864 54.7695 56.6405 54.575 56.6405 54.3779C56.6405 53.9677 56.8385 53.5828 57.1723 53.3445L57.1909 53.3312C57.3455 53.2207 57.5222 53.1451 57.7089 53.1096L58.1679 53.0221C58.4562 52.9672 58.7515 52.9597 59.0423 52.9998L59.3569 53.0432C59.9126 53.1198 60.4098 53.4279 60.7258 53.8913C60.9505 54.221 61.0708 54.6107 61.0708 55.0096V56.0813C61.0708 56.6744 60.9741 57.2636 60.7846 57.8257L59.531 61.5431C59.4793 61.6965 59.3354 61.7998 59.1735 61.7998C59.061 61.7998 58.9543 61.7496 58.8826 61.6628L58.2183 60.8586C58.0277 60.6279 57.7987 60.432 57.5413 60.2795L56.9062 59.9031C56.5802 59.7099 56.2372 59.5468 55.8817 59.4158C55.5284 59.2856 55.164 59.1877 54.7931 59.1232L54.1419 59.0099C54.088 59.0005 54.0354 58.9849 53.9852 58.9634C53.7852 58.8777 53.6361 58.7044 53.5812 58.4939L53.3318 57.5377L52.8831 56.0236L52.3784 54.6777L51.7054 53.444L51.5218 53.1553C50.8655 52.124 50.0134 51.2313 49.0136 50.5278L48.9803 50.5078C48.6337 50.2998 48.2424 50.1773 47.839 50.1504L47.6399 50.1371C47.6211 50.1359 47.6024 50.1329 47.5841 50.1283C47.4641 50.0983 47.3725 50.0014 47.3494 49.8799L47.163 48.9015L47.1266 48.7831C47.0021 48.3787 46.8133 47.9969 46.5673 47.6526L46.447 47.4841C46.401 47.4197 46.3498 47.3592 46.2938 47.3032L46.0386 47.0481C45.9327 46.9422 45.789 46.8826 45.6391 46.8826C45.5714 46.8826 45.5042 46.8948 45.4408 46.9186L45.3752 46.9432C45.1885 47.0132 45.0285 47.1401 44.9179 47.3061L44.8137 47.4624C44.7726 47.5241 44.7416 47.5921 44.7221 47.6637L44.6427 47.9548C44.6076 48.0833 44.4909 48.1725 44.3578 48.1725C44.3215 48.1725 44.2856 48.1658 44.2518 48.1528L43.738 47.9552C43.6359 47.9159 43.5208 47.9319 43.4332 47.9976C43.3789 48.0383 43.3391 48.0954 43.3195 48.1605L42.5312 50.7883C42.5162 50.8382 42.4891 50.8835 42.4523 50.9203L41.9413 51.3462C41.8338 51.4358 41.7377 51.5384 41.6553 51.6517C41.4444 51.9418 41.3307 52.2912 41.3307 52.6499V53.444L41.4161 54.0847C41.4334 54.2139 41.403 54.3449 41.3307 54.4534L41.0049 55.0507C40.9978 55.0637 40.9898 55.0762 40.9809 55.0881C40.8912 55.2076 40.9001 55.3741 41.0019 55.4835L41.9796 56.5336C42.189 56.7585 42.5283 56.8033 42.7888 56.6405C43.1917 56.4207 43.6488 56.3202 44.1068 56.3507L44.2469 56.3601C44.6749 56.3957 45.0673 56.6128 45.325 56.9564L45.4245 57.0891L45.5396 57.2553C45.7738 57.5936 45.7726 58.0419 45.5367 58.3789C45.3542 58.6708 45.2667 59.0121 45.2862 59.3558L45.4245 61.7998L45.4806 64.2673V68.249L45.4337 69.0774C45.355 70.4676 44.8195 71.7929 43.9104 72.8475L42.3182 74.2523C42.1155 74.4312 41.8545 74.5299 41.5842 74.5299H34.6046C34.3646 74.5299 34.1788 74.3195 34.2086 74.0812L34.2647 73.6887L34.3768 73.184Z" fill="#9168A4"/>
              </svg>
              <h2>Veterinaria Bermúdez</h2>
            </div>
            <div className="container--datos">
              <div className="info--dato">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 1.875C6.89453 1.875 4.375 4.27305 4.375 7.22656C4.375 10.625 8.125 16.0105 9.50195 17.8707C9.55911 17.9492 9.63402 18.0131 9.72058 18.0572C9.80713 18.1012 9.90288 18.1242 10 18.1242C10.0971 18.1242 10.1929 18.1012 10.2794 18.0572C10.366 18.0131 10.4409 17.9492 10.498 17.8707C11.875 16.0113 15.625 10.6277 15.625 7.22656C15.625 4.27305 13.1055 1.875 10 1.875Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 9.375C11.0355 9.375 11.875 8.53553 11.875 7.5C11.875 6.46447 11.0355 5.625 10 5.625C8.96447 5.625 8.125 6.46447 8.125 7.5C8.125 8.53553 8.96447 9.375 10 9.375Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p>Avenida Sarasa, Tunuyán, Mendoza.</p>
              </div>
              <div className="info--dato">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.0982 12.252L11.6665 12.917C9.34816 11.7537 7.9165 10.417 7.08316 8.33366L7.72483 4.89199L6.51233 1.66699H3.3865C2.4465 1.66699 1.7065 2.44366 1.84733 3.37283C2.19733 5.69199 3.23066 9.89783 6.24983 12.917C9.42066 16.0878 13.9882 17.4637 16.5015 18.0112C17.4723 18.222 18.3332 17.4653 18.3332 16.4712V13.4845L15.0982 12.252Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
                <p>+54 123456789</p>
              </div>
              <div className="info--dato">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.125 5.625V14.375C18.125 14.8723 17.9275 15.3492 17.5758 15.7008C17.2242 16.0525 16.7473 16.25 16.25 16.25H3.75C3.25272 16.25 2.77581 16.0525 2.42417 15.7008C2.07254 15.3492 1.875 14.8723 1.875 14.375V5.625M18.125 5.625C18.125 5.12772 17.9275 4.65081 17.5758 4.29917C17.2242 3.94754 16.7473 3.75 16.25 3.75H3.75C3.25272 3.75 2.77581 3.94754 2.42417 4.29917C2.07254 4.65081 1.875 5.12772 1.875 5.625M18.125 5.625V5.8275C18.125 6.14762 18.0431 6.46242 17.887 6.74191C17.7309 7.0214 17.5059 7.25628 17.2333 7.42417L10.9833 11.27C10.6877 11.4521 10.3472 11.5485 10 11.5485C9.65275 11.5485 9.31233 11.4521 9.01667 11.27L2.76667 7.425C2.4941 7.25711 2.26906 7.02224 2.11297 6.74275C1.95689 6.46325 1.87496 6.14845 1.875 5.82833V5.625" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
                <p>info@vetebermudez.com.ar</p>
              </div>

            </div>
          </div>
          <div className="footer__nav">
            <h3>Navegación</h3>
            <Link to="/">Inicio</Link>
            <Link>Cómo funciona</Link>
            <Link>Precios</Link>
            <Link to="/soporte">Soporte</Link>
            <Link to="/consulta">Consulta</Link>

          </div>
        </div>

        <div className="divisor"></div>

        <div className="footer--inferior">
          <div className="footer__redes">
            <Link>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="white"/>
              </svg>
            </Link>
            <Link>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6041 7.50038H11.6666V5.83371C11.6666 4.97371 11.7366 4.43204 12.9691 4.43204H14.5258V1.78204C13.7683 1.70371 13.0066 1.66538 12.2441 1.66704C9.98325 1.66704 8.33325 3.04788 8.33325 5.58288V7.50038H5.83325V10.8337L8.33325 10.8329V18.3337H11.6666V10.8312L14.2216 10.8304L14.6041 7.50038Z" fill="white"/>
              </svg>
            </Link>
          </div>
          <div className="footer__terminos">
            <Link>Términos y condiciones</Link>
            <Link>Políticas de privacidad</Link>
          </div>
        </div>
      </div>
    </div>
    
  )
}
