'use client';

import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import { fadeIn, mobileVariants, navVariants, staggerContainer } from '@/utils/motion';

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


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const btnRef = useRef<HTMLButtonElement>(null)

    // Navbar component
    const CustomLink = ({ href, title, className }: customLinkProps) => {
        const pathname = usePathname()

        return (
            <Link href={href} className={`${className} relative group`}  >
                {title}
                < span className={`h-[2px] inline-block  bg-white absolute right-0 -bottom-0.5
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
                < span className={`h-[1px] inline-block bg-black absolute left-[25%] -bottom-0.5
                group-hover:w-[50%] transition-[width] ease duration-300
                ${pathname === href ? 'w-[50%]' : 'w-0'}`}>&nbsp;</span >

            </button >
        )
    }

    const handleToggle = () => {
        setIsOpen(prev => !prev);
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
            }
        };

        document.addEventListener("click", closeMenu)

        // cleanup
        return () => document.removeEventListener("click", closeMenu)
    }, [isOpen])

    return (<header className={`${navbar ? 'bg-white text-black py-2 shadow-xl ' : 'text-white bg-transparent'} fixed w-full items-end justify-end z-[999] flex lg:px-16 py-8 font-normal`
    }>
        <button className='px-3 flex lg:hidden flex-col items-center justify-center' onClick={handleToggle}>
            <span className={`bg-white dark:bg-black block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
            <span className={`bg-white dark:bg-black block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-white dark:bg-black block h-0.5 w-6 transition-all duration-300 ease-out rounded-sm  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>

        <div className="flex items-center justify-center flex-wrap">
            <motion.nav
                variants={navVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={`lg:flex hidden items-center justify-start ${navbar ? 'text-[17px] transition-all duration-200 ease-in-out' : 'text-lg'} font-medium`}>
                <CustomLink href="/" title='Home' className="mr-4" />
                <CustomLink href="/about" title='About' className="mx-4" />
                <CustomLink href="/equipment" title='Equipment & Rentals' className="mx-4" />
                <CustomLink href="/services" title='Services' className="mx-4" />
                <CustomLink href="/contact" title='Contact' className="mr-4" />
            </motion.nav>
        </div>
        {/* </div> */}
        {
            isOpen && (
                <motion.nav
                    ref={btnRef}
                    initial="hidden"
                    variants={mobileVariants}
                    whileInView="show"
                    viewport={{ once: true }}
                    className="w-full lg:hidden fixed top-[7%] bottom-30 left-0 mr-4 h-screen flex flex-col text-black bg-white text-4xl font-medium">
                    <CustomMobileLink href="/" title='Home' className="mt-48" toggle={handleToggle} />
                    <CustomMobileLink href="/about" title='About' className="" toggle={handleToggle} />
                    <CustomMobileLink href="/equipment" title='Equipment & Rentals' className="" toggle={handleToggle} />
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
                <Link href='/' className="">
                    <motion.div
                        variants={mobileVariants}
                        className={`${navbar ? 'w-[110px] h-[40px] transition-all duration-200 ease-in-out' : 'w-[120px] h-[50px]'} 
                         absolute left-[35%] top-0 md:top-2 md:left-[45%] lg:left-[3%] `}

                    >
                        <Image
                            src="/Logo.png"
                            alt="logo"
                            className='mt-4 object-contain object-center '
                            width={1000}
                            height={1000}
                            priority
                        />
                    </motion.div>
                </Link>

                : (
                    <Link href='/' className="">
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
                    </Link>
                )
            }


        </motion.div>

    </header >
    )
}

export default Navbar

