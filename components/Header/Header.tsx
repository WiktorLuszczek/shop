import Link from 'next/link';
import Script from 'next/script';
import { useState } from 'react';
import { useGetOrderFromOrderContext } from '../../hooks/useGetElementContext';
import { OrderCard } from '../OrderCard/OrderCard';
import { SearchInput } from '../SearchInput/SearchInput';

export function Header() {
    const order = useGetOrderFromOrderContext();
    const [hidden, setHidden] = useState('hidden');
    const toggleOrderBoxOn = () => {
        setHidden('');
    };
    const toggleOrderBoxOff = () => {
        setHidden('hidden');
    };
    return (
        <>
            <Script
                src="https://kit.fontawesome.com/0912d2c3f4.js"
                crossOrigin="anonymous"
            ></Script>
            <header className="flex flex-row p-10 bg-gray-100 min-w-minWidth  max-w-maxWidth mx-auto">
                <div className="basis-1/2">
                    <Link href="/">
                        <h1 className="font-mono text-5xl ml-2">
                            TIENDA|DE|ROPA
                        </h1>
                    </Link>
                </div>
                <div className="basis-1/4 text-right">
                    <SearchInput />
                </div>
                <ul className="basis-1/4 text-right">
                    <li className="inline">
                        <a href="http://www.facebook.com" target="_blank">
                            <span className="mx-1 text-5xl fa-brands fa-facebook-f" />
                        </a>
                    </li>
                    <li className="inline">
                        <a href="http://www.instagram.com" target="_blank">
                            <span className="mx-1 text-5xl fa-brands fa-instagram" />
                        </a>
                    </li>
                    <li className="inline">
                        <a href="http://www.twitter.com" target="_blank">
                            <span className="mx-1 text-5xl fa-brands fa-twitter" />
                        </a>
                    </li>
                    <li className="inline">
                        <a href="http://www.youtube.com" target="_blank">
                            <span className="mx-1 text-5xl fa-brands fa-youtube" />
                        </a>
                    </li>
                </ul>
                <div className="ml-20 flex gap-4 justify-center items-center">
                    <Link
                        href={'/orderpage'}
                        className={'hover:text-gray-500'}
                        onMouseOver={toggleOrderBoxOn}
                        onMouseOut={toggleOrderBoxOff}
                    >
                        <i
                            id="toggle-button-baskets"
                            className="text-5xl fa-regular fa-basket-shopping"
                        ></i>
                        {order.length === 0 ? null : (
                            <div className="bottom-4 left-7 relative bg-white w-7 h-7 text-center rounded-full border-solid border-gray-500 border-2 hover:text-gray-500">
                                {order.length}
                            </div>
                        )}
                    </Link>
                    <Link href={'/signin'} className="w-16 text-xl">
                        Sign In
                    </Link>
                </div>
                <div
                    className={`${hidden} absolute w-96 h-3/4 bg-white top-24 right-2 border-2 border-gray-400 rounded-lg text-center`}
                >
                    <OrderCard />
                </div>
            </header>
        </>
    );
}
