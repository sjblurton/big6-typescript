import React from "react";
import { useRouter } from "next/router";

function LogoSvg() {
	const router = useRouter();
	return (
		<svg
			onClick={() => router.push("/")}
			xmlns="http://www.w3.org/2000/svg"
			width="60"
			height="60"
			fill="none"
			viewBox="0 0 100 100"
			cursor="pointer"
		>
			<path fill="#34425D" d="M0 0H100V100H0z"></path>
			<path
				fill="#fff"
				d="M73.897 92.771c-6.893 0-12.091-1.416-15.596-4.25-3.504-2.861-5.257-7.315-5.257-13.36 0-3.972.701-7.302 2.103-9.989 1.431-2.716 3.46-4.775 6.09-6.177 2.628-1.401 5.753-2.102 9.374-2.102 2.278 0 4.22.233 5.827.7 1.635.439 2.891 1.212 3.767 2.322.906 1.08 1.402 2.6 1.49 4.556.438-.963.598-2 .482-3.11-.117-1.139-.234-2.293-.35-3.46 1.05 0 2.233-.015 3.547-.045 1.315-.058 2.658-.102 4.03-.131 1.403-.059 2.717-.102 3.944-.132 1.226-.029 2.278-.043 3.154-.043.204.876.365 2 .482 3.373.116 1.343.175 2.774.175 4.293.029 1.519 0 3.008-.088 4.469-.087 1.43-.233 2.686-.438 3.767-.73.117-1.752.204-3.066.263-1.285.058-2.746.102-4.381.131h-4.95c-1.694-.029-3.315-.073-4.863-.131a60.56 60.56 0 01-3.943-.263V71.13h-2.146v8.98h2.584v-1.576h-1.49a9.513 9.513 0 01-.218-1.928c0-.613.102-1.329.306-2.146 1.198.116 2.702.248 4.513.394 1.84.117 4.088.175 6.746.175 1.168 0 2.453-.015 3.855-.044 1.402-.058 2.775-.117 4.118-.175 1.344-.088 2.483-.175 3.417-.263.292.584.511 1.387.657 2.41.146.993.22 2.073.22 3.241a22.487 22.487 0 01-.132 3.198c-.117.993-.307 1.753-.57 2.278-.496.03-.934.38-1.314 1.052-.35.671-.628 1.518-.832 2.54-.205.994-.307 2.03-.307 3.111a52.886 52.886 0 00-7.14-.22c-2.395.089-4.746.205-7.054.351a89.12 89.12 0 01-6.746.263z"
			></path>
			<path
				fill="#fff"
				d="M35.773 65.689c.146.935.35 1.709.613 2.322.877-.088 1.972-.19 3.286-.307a812.17 812.17 0 014.206-.263 72.511 72.511 0 018.761 0c1.548.088 3.008.175 4.38.263 1.373.117 2.498.22 3.374.307.263-.614.467-1.387.613-2.322.146-.935.234-1.898.263-2.891.03-1.023 0-2-.087-2.936-.088-.934-.249-1.708-.482-2.321-.438-.175-.877-.468-1.315-.877-.438-.438-.817-1.124-1.139-2.058-.292-.964-.438-2.308-.438-4.03 0-1.87.146-3.272.438-4.206.292-.935.658-1.563 1.096-1.884.438-.35.876-.526 1.314-.526.263-.525.453-1.241.57-2.146.116-.906.175-1.884.175-2.935a20.17 20.17 0 00-.22-3.023c-.145-.993-.364-1.84-.656-2.541-.877.058-2.001.146-3.374.263-1.372.117-2.833.219-4.38.306-1.548.059-3.053.088-4.513.088-1.314 0-2.745-.03-4.293-.088-1.519-.087-2.964-.19-4.337-.306a192.773 192.773 0 00-3.373-.263c-.321.7-.57 1.548-.745 2.54a24.753 24.753 0 00-.263 3.024c0 1.022.073 1.986.22 2.89.145.906.35 1.622.613 2.148.32 0 .7.175 1.139.525.467.321.876.964 1.226 1.928.35.934.526 2.336.526 4.205 0 1.723-.146 3.067-.438 4.03-.292.935-.672 1.622-1.14 2.06-.437.408-.875.7-1.313.876-.205.613-.365 1.387-.482 2.322-.088.934-.117 1.913-.088 2.935.03.993.117 1.956.263 2.891z"
			></path>
			<path
				fill="url(#paint0_linear)"
				fillRule="evenodd"
				d="M11.884 81.874c3.418 2.862 8.82 4.294 16.21 4.294 2.803 0 5.431-.249 7.885-.745 2.453-.468 4.6-1.242 6.44-2.322 1.869-1.11 3.314-2.585 4.337-4.425 1.05-1.84 1.577-4.132 1.577-6.877 0-2.454-.54-4.425-1.621-5.915a9.13 9.13 0 00-4.206-3.285c-1.723-.701-3.578-1.052-5.563-1.052-.614 0-1.212.03-1.797.088-.584.059-1.168.132-1.752.22l-.263-1.227c3.242-.614 7.52-.804 12.836-.57.175-.467.307-1.139.394-2.015.117-.876.16-1.825.132-2.848 0-1.022-.088-1.971-.263-2.847-.146-.876-.394-1.533-.745-1.972-1.869-.146-3.709-.262-5.52-.35-1.81-.088-3.417-.132-4.819-.132-3.826 0-7.447.351-10.864 1.052-3.417.7-6.44 1.825-9.068 3.373-2.629 1.548-4.688 3.592-6.177 6.133-1.49 2.541-2.234 5.637-2.234 9.288 0 5.227 1.694 9.272 5.081 12.134zm17.334-7.945c3.37 0 9.376-.163 9.376-.769 0-.605-6.005-.905-9.376-.905-2.88 0-2.844.219-2.773.66.012.075.026.157.026.245 0 .091-.014.172-.027.245-.07.406-.091.523 2.774.523z"
				clipRule="evenodd"
			></path>
			<path
				fill="#fff"
				fillRule="evenodd"
				d="M23.777 42.09c2.103.088 4.44.131 7.01.131 3.475 0 6.337-.248 8.586-.744 2.278-.497 4.06-1.212 5.345-2.147 1.314-.964 2.234-2.103 2.76-3.417.525-1.343.788-2.847.788-4.512 0-1.46-.321-2.818-.964-4.074-.613-1.285-1.781-2.439-3.504-3.461a12.459 12.459 0 002.365-3.242 8.216 8.216 0 00.876-3.723c0-2.19-.423-3.943-1.27-5.257-.818-1.315-2-2.308-3.548-2.98-1.52-.671-3.315-1.11-5.389-1.314C34.76 7.117 32.466 7 29.954 7c-2.365 0-4.6.03-6.702.088-2.074.058-4.133.116-6.177.175-2.015.058-4.103.087-6.265.087-2.132-.029-4.424-.102-6.878-.219-.408.935-.686 2.089-.832 3.461a25.997 25.997 0 00-.044 3.987c.117 1.314.35 2.41.701 3.285.35 0 .745.176 1.183.526.467.321.862.964 1.183 1.928.35.934.526 2.336.526 4.205 0 1.723-.146 3.067-.439 4.03-.292.935-.657 1.621-1.095 2.06-.438.408-.89.7-1.358.876-.204.613-.35 1.387-.438 2.321-.087.906-.117 1.87-.087 2.892.029 1.022.102 2 .219 2.935.146.905.335 1.665.57 2.278 2.744-.175 5.212-.263 7.403-.263 2.19 0 4.278.044 6.264.131 1.986.117 4.016.22 6.09.307zm7.972-8.63c0 .605-6.005.768-9.377.768-2.864 0-2.844-.117-2.773-.524.012-.072.027-.153.027-.244 0-.089-.014-.17-.026-.246-.072-.441-.107-.66 2.772-.66 3.372 0 9.377.3 9.377.906zm-9.377-13.074c3.372 0 9.377-.162 9.377-.768s-6.005-.905-9.377-.905c-2.879 0-2.844.218-2.772.66.012.075.026.157.026.245 0 .091-.015.172-.027.244-.07.407-.091.524 2.773.524z"
				clipRule="evenodd"
			></path>
			<defs>
				<linearGradient
					id="paint0_linear"
					x1="45.873"
					x2="12.709"
					y1="52.578"
					y2="82.835"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#F5AF19"></stop>
					<stop offset="1" stopColor="#F12711"></stop>
				</linearGradient>
			</defs>
		</svg>
	);
}

export default LogoSvg;
