import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'
import { LogOut, User2, Menu, X } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { setUser } from '@/redux/authSlice'
import { toast } from 'sonner'
import logo from "../../assets/img/logo.avif";

const Navbar = () => {
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    return (
        <div className='bg-white'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16 px-4'>
                <div className="logo-container">
                   <img src={logo} alt="Royal Creatives Logo" className="logo-image" />
                </div>

                {/* Desktop Menu */}
                <div className='hidden md:flex items-center gap-12'>
                    <ul className='flex font-medium items-center gap-5'>
                        {
                            user && user.role === 'recruiter' ? (
                                <>
                                    <li><Link to="/admin/companies">Companies</Link></li>
                                    <li><Link to="/admin/jobs">Jobs</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link to="/">Home</Link></li>
                                    {/* <li><Link to="/jobs">Jobs</Link></li> */}
                                    <li><Link to="/services">Services</Link></li>
                                    <li><Link to="/browse">Browse</Link></li>
                                    <li><Link to="/contact">Contact us</Link></li>
                                </>
                            )
                        }
                    </ul>
                </div>

                {/* Right Side Buttons / Avatar */}
                <div className='flex items-center gap-2'>
                    {
                        !user ? (
                            <div className='flex items-center gap-2'>
                                <Link to="/login"><Button variant="outline">Login</Button></Link>
                                <Link to="/signup"><Button className="bg-[#A52A2A] hover:bg-[#FF474C]">Signup</Button></Link>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className="w-80">
                                    <div>
                                        <div className='flex gap-2 space-y-2'>
                                            <Avatar className="cursor-pointer">
                                                <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                                            </Avatar>
                                            <div>
                                                <h4 className='font-medium'>{user?.fullname}</h4>
                                                <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col my-2 text-gray-600'>
                                            {
                                                user && user.role === 'student' && (
                                                    <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                                        <User2 />
                                                        <Button variant="link"> <Link to="/profile">View Profile</Link></Button>
                                                    </div>
                                                )
                                            }
                                            <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                                <LogOut />
                                                <Button onClick={logoutHandler} variant="link">Logout</Button>
                                            </div>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )
                    }

                    {/* Hamburger Button for Mobile */}
                    <button className="md:hidden ml-2" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <ul className="flex flex-col p-4 font-medium space-y-3">
                        {
                            user && user.role === 'recruiter' ? (
                                <>
                                    <li><Link to="/admin/companies" onClick={() => setIsOpen(false)}>Companies</Link></li>
                                    <li><Link to="/admin/jobs" onClick={() => setIsOpen(false)}>Jobs</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                                    {/* <li><Link to="/jobs" onClick={() => setIsOpen(false)}>Jobs</Link></li> */}
                                    <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
                                    <li><Link to="/browse" onClick={() => setIsOpen(false)}>Browse</Link></li>
                                    <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact us</Link></li>
                                </>
                            )
                        }
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Navbar
