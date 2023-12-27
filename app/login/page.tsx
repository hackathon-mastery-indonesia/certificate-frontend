import Head from 'next/head';
import { LoginNav } from '../components/partials/navbar';
import {FaWallet} from 'react-icons/fa'

export default function Page() {
    return (
        <main className="flex bg-gradient-to-b from-slate-950 to-slate-900 via-gray-950 min-h-screen flex-col items-center justify-between p-6">
            <LoginNav />
            <Head>
                <title>Login -- Certifolio</title>
            </Head>
            <div className="my-auto max-w-5xl flex mx-auto   ">
                <div className=" rounded-lg p-8 md:min-w-96">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white text-center">Login to Certifolio</h2>
                    <form className='w-full ' method='POST' action={'/api/login/'}>
                        <div className="mb-4">
                            <input type="text" id="wallet_id" name="wallet_id" placeholder='Your Wallet Id' className="border border-neutral-700 rounded-md w-full text-white px-3 py-3 mt-1 bg-neutral-900" />
                        </div>
                        <button type="submit" className="bg-white w-full justify-center flex items-center text-blue-900 font-bold rounded-md px-4 py-3 hover:bg-indigo-300 transition duration-300">
                            <FaWallet size={24} />
                            <h1 className='ml-3'>Login with Your Wallet</h1>
                        </button>
                    </form>
                </div>
            </div>
            <footer className="mt-auto pt-8 border-t border-gray-600 w-screen md:hidden">
            <div className="text-center">
                <p className="mb-4">{`Don't have an account?`} <a href="/register/" className="text-blue-500">Register</a></p>
            </div>
            </footer>
        </main>
    );
}
