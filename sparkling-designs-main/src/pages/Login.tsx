
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import gsap from "gsap";
import { Loader2, Mail, Lock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import "../App.css";
import { loginUser } from "@/APi/UserApi";

// Zod Schema
const loginSchema = z.object({
    username: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export const Login = () => {
    const navigate = useNavigate();
    const formRef = useRef<HTMLDivElement>(null);

    // GSAP Animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(formRef.current,
                { opacity: 0, y: 30, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" }
            );
        });
        return () => ctx.revert();
    }, []);

    // React Hook Form
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
    });

    // React Query Mutation (Mock Login)
    const loginMutation = useMutation({
        mutationFn: loginUser,
        onSuccess: (data) => {
            // ✅ store token
            localStorage.setItem("token", data.token);

            // ✅ redirect
            navigate("/");
        },
        onError: () => {
            alert("Invalid credentials");
        },
    });


    const onSubmit = (data: LoginFormValues) => {
        loginMutation.mutate(data);
    };


    return (
        <div className="min-h-screen bg-dots-pattern flex items-center justify-center p-4 relative overflow-hidden bg-gray-50">
            {/* Background Gradients */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

            <div ref={formRef} className="w-full max-w-md bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl p-8 md:p-10 relative z-10 box-border">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 mb-4 text-primary">
                        <Lock className="h-8 w-8" />
                    </div>
                    <h1 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">Welcome Back</h1>
                    <p className="text-gray-500">Sign in to access your command center</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                        <div className="relative group">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 group-focus-within:text-primary transition-colors" />
                            <input
                                {...register("username")}
                                type="email"
                                placeholder="admin@sparkling.com"
                                className={cn(
                                    "w-full pl-10 pr-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400 text-gray-900 font-medium",
                                    errors.username && "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                                )}
                            />
                        </div>
                        {errors.username && <p className="text-xs text-red-500 ml-1 font-bold">{errors.username.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-bold text-gray-700 ml-1">Password</label>
                            <a href="#" className="text-xs font-bold text-primary hover:text-primary/80">Forgot password?</a>
                        </div>
                        <div className="relative group">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 group-focus-within:text-primary transition-colors" />
                            <input
                                {...register("password")}
                                type="password"
                                placeholder="••••••••"
                                className={cn(
                                    "w-full pl-10 pr-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-gray-400 text-gray-900 font-medium",
                                    errors.password && "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                                )}
                            />
                        </div>
                        {errors.password && <p className="text-xs text-red-500 ml-1 font-bold">{errors.password.message}</p>}

                        {loginMutation.isError && (
                            <p className="text-red-600 text-sm font-bold text-center">
                                {(loginMutation.error as Error).message}
                            </p>
                        )}
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={loginMutation.isPending}
                            className="w-full bg-gradient-to-r from-primary to-[#0EA5E9] hover:opacity-90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 text-base"
                        >
                            {loginMutation.isPending ? (
                                <Loader2 className="h-5 w-5 animate-spin" />
                            ) : (
                                <>
                                    Sign In to Dashboard <ArrowRight className="h-5 w-5" />
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
