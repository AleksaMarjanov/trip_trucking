'use client';

import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import { fadeIn, mobileVariants, mobileVariantsIsOpen, navVariants, staggerContainer } from '@/utils/motion';

type customLinkProps = {
    href: string,
    title: string,
    className: string,
}

type MobLinkProps = {
    href: string,
    title: string,
    className: string,
    toggle: boolean | (() => void)
}


const Navbar = ({ isOpen, setIsOpen }: any) => {
    const [rotate, setRotate] = useState<boolean>(false)
    const [navbar, setNavbar] = useState(false);
    const btnRef = useRef<HTMLButtonElement>(null)

    // Navbar component
    const CustomLink = ({ href, title, className }: customLinkProps) => {
        const pathname = usePathname()

        return (
            <Link href={href} className={`${className} relative group`}  >
                {title}
                < span className={`${navbar ? 'bg-black' : 'bg-white'} h-[2px] inline-block  absolute right-0 -bottom-0.5
                group-hover:w-full transition-[width] ease duration-200
                ${pathname === href ? 'w-full' : 'w-0'}`}>&nbsp;</span >
            </Link >
        )
    }

    const CustomMobileLink = ({ href, title, toggle, className }: MobLinkProps) => {
        const router = useRouter();
        const pathname = usePathname()

        const handleClick = () => {
            // @ts-ignore
            toggle()
            router.push(href);
        }

        return (
            // @ts-ignore
            < button href={href} className={`${className} relative text-black group my-2`
            } onClick={handleClick} >
                {title}
                <div className={`h-[1px] inline-block bg-black dark:bg-white absolute left-[25%] -bottom-0.5
                group-hover:w-[50%] transition-[width] ease duration-300
                ${pathname === href ? 'w-[50%]' : 'w-0'}`}>&nbsp;</div>

            </button >
        )
    }

    const handleToggle = () => {
        // @ts-expect-error
        setIsOpen(prev => !prev);
        setRotate(prev => !prev);
    }

    // change background for navigation bar when scrolling
    const changeBackground = () => {
        if (window.scrollY >= 200) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }

    // only run on client side 
    useEffect(() => {
        addEventListener("scroll", changeBackground)

        window.addEventListener("scroll", changeBackground)
    }, [])

    // if clicked outside of navbar exit navbar
    useEffect(() => {
        if (!isOpen) return;

        const closeMenu = (e: any) => {
            if (btnRef.current && !btnRef.current.contains(e.target)) {
                setIsOpen(false);
                setRotate(false);
            }
        };

        document.addEventListener("click", closeMenu)

        // cleanup
        return () => document.removeEventListener("click", closeMenu)
    }, [isOpen])
    //
    // 1.solution for document being undefined, 2. useEffect, 3. import it like dynamic
    useEffect(() => {
        if (typeof window !== "undefined") {
            rotate ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
        }
    }, [rotate])

    return (
        <header className={`${navbar ? 'bg-white text-black  bg-opacity-75 shadow-xl py-8' : 'text-white bg-black opacity-75 py-12'} top-0 fixed w-full items-end justify-end z-[999] flex lg:px-16 font-normal`}>
            <button className='px-3 flex lg:hidden flex-col items-center justify-center' onClick={handleToggle}>
                <span className={`${navbar ? 'bg-black dark:bg-black' : 'bg-white'} h-0.5 w-6 transition-all duration-300 ease-out rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`${navbar ? 'bg-black dark:bg-black' : 'bg-white'} h-0.5 w-6 transition-all duration-300 ease-out rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`${navbar ? 'bg-black dark:bg-black' : 'bg-white'} h-0.5 w-6 transition-all duration-300 ease-out rounded-sm  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            <div className="flex items-center justify-center flex-wrap">
                <motion.nav
                    variants={navVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className={`lg:flex hidden items-center justify-start ${navbar ? 'text-[15px] transition-all duration-200 ease-out' : 'text-lg'} font-medium`}>
                    <CustomLink href="/" title='Home' className="mr-4" />
                    <CustomLink href="/about" title='About' className="mx-4" />
                    <CustomLink href="/careers" title='Careers' className="mx-4" />
                    <CustomLink href="/services" title='Services' className="mx-4" />
                    <CustomLink href="/contact" title='Contact' className="ml-32 border px-4 py-3" />
                </motion.nav>
            </div>
            {/* </div> */}
            {
                isOpen && (
                    <motion.nav
                        ref={btnRef}
                        initial="hidden"
                        variants={mobileVariantsIsOpen}
                        whileInView="show"
                        viewport={{ once: true }}
                        className={`${navbar ? 'top-[10%] drop-shadow-2xl ' : 'top-[12%]'} w-[80%] flex-shrink-0 lg:hidden rounded-2xl fixed bottom-30 right-5 h-[80vh] flex flex-col text-black bg-white text-4xl font-medium`}>
                        <CustomMobileLink href="/" title='Home' className="mt-48" toggle={handleToggle} />
                        <CustomMobileLink href="/about" title='About' className="" toggle={handleToggle} />
                        <CustomMobileLink href="/careers" title='Careers' className="" toggle={handleToggle} />
                        <CustomMobileLink href="/services" title='Services' className="" toggle={handleToggle} />
                        <CustomMobileLink href="/contact" title='Contact' className="" toggle={handleToggle} />
                    </motion.nav>
                )
            }



            <motion.div
                initial="hidden"
                variants={staggerContainer}
                whileInView="show"
                viewport={{ once: true }}
            >
                {navbar ?
                    <a href='/' className="">
                        <motion.div
                            variants={mobileVariants}
                            className={`${navbar ? 'w-[100px] h-[40px] transition-all duration-300 ease-out left-[38%]' : 'w-[120px] h-[50px]'}
                        absolute left-[35 %] top-0 md:top-2 md:left-[45%] lg:left-[3%] `}

                        >
                            <Image
                                src="/Logo.png"
                                alt="logo"
                                className='mt-2 object-contain object-center '
                                width={1000}
                                height={1000}
                                priority
                            />
                        </motion.div>
                    </a>

                    : (
                        <a href='/' className="">
                            <motion.div
                                variants={mobileVariants}
                                className={`${navbar ? 'w-[110px] h-[40px] transition-all duration-200 ease-in-out' : 'w-[120px] h-[50px]'} 
                         absolute left-[35%] top-0 md:top-2 md:left-[45%] lg:left-[3%] `}

                            >
                                <Image
                                    src="/Logo2.png"
                                    alt="logo"
                                    className='mt-4 object-contain object-center '
                                    width={1000}
                                    height={1000}
                                    priority
                                />
                            </motion.div>
                        </a>
                    )
                }


            </motion.div >

        </header >
    )
}

export default Navbar

