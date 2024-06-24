'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Control, useForm, UseFormReturn } from 'react-hook-form';
import Link from 'next/link';
import { z } from 'zod';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Separator } from '@/components/ui/separator';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const formSchema = z
  .object({
    fullName: z.string().min(1, {
      message: 'Full name is required.',
    }),
    email: z.string().email({
      message: 'Invalid email address.',
    }),
    password: z.string().min(6, {
      message: 'Password must be at least 6 characters.',
    }),
    confirmPassword: z.string().min(6, {
      message: 'Confirm password must be at least 6 characters.',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  });

type FormValues = z.infer<typeof formSchema>;

interface InputFieldProps {
  name: keyof FormValues;
  control: Control<FormValues>;
  label: string;
  type: string;
  placeholder: string;
  iconSrc: string;
  description?: string;
  password?: boolean;
  isPasswordVisible?: boolean;
  togglePasswordVisibility?: () => void;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  control,
  label,
  type,
  placeholder,
  iconSrc,
  description,
  password = false,
  isPasswordVisible = false,
  togglePasswordVisibility,
}) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-sm text-slate-600">{label}</FormLabel>
        <FormControl>
          <div className="relative">
            <Image
              loading="lazy"
              src={iconSrc}
              alt=""
              width={20}
              height={20}
              className="absolute m-5 h-5 w-5 shrink-0"
            />
            {password && (
              <Image
                loading="lazy"
                src={
                  isPasswordVisible
                    ? '/icons/visible.svg'
                    : '/icons/invisible.png'
                }
                alt=""
                width={20}
                height={20}
                className="absolute right-0 m-5 h-5 w-5 shrink-0 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            )}
            <Input
              type={isPasswordVisible ? 'text' : type}
              placeholder={placeholder}
              aria-label={label}
              className="mt-2 flex h-[60px] items-center rounded-[10px] border-none px-[50px]"
              {...field}
              value={
                typeof field.value === 'boolean'
                  ? (field.value as boolean).toString()
                  : field.value
              }
            />
          </div>
        </FormControl>
        {description && <FormDescription>{description}</FormDescription>}
        <FormMessage />
      </FormItem>
    )}
  />
);

interface SignupPageProps {
  form: UseFormReturn<FormValues>;
  isPasswordVisible: boolean;
  isLoading: boolean;
  togglePasswordVisibility: () => void;
  onSubmit: (data: FormValues) => Promise<void>;
}

const SignupPage: React.FC<SignupPageProps> = ({
  form,
  isPasswordVisible,
  isLoading,
  togglePasswordVisibility,
  onSubmit,
}) => (
  <div className="relative flex min-h-screen flex-col justify-center bg-white">
    <Image
      loading="lazy"
      src="/images/background.png"
      alt=""
      layout="fill"
      objectFit="cover"
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="relative flex w-full max-w-full flex-col items-center px-2 sm:px-16">
      <Card className="relative mb-10 mt-14 w-full max-w-lg rounded-3xl bg-white p-5 shadow-2xl sm:p-10">
        <CardHeader className="mt-0 p-0 text-center">
          <Image
            loading="lazy"
            src="/images/logo.png"
            alt="Logo"
            width={144}
            height={48}
            className="mb-4 h-12 w-36 self-center"
          />
          <div className="text-sm font-bold text-indigo-800">Welcome Here!</div>
          <h1 className="mt-1.5 text-3xl font-extrabold text-slate-800">
            Create a Free Account
          </h1>
        </CardHeader>
        <CardContent className="mb-0 mt-10 px-0 py-0">
          <Form {...form}>
            <form
              className="flex flex-col space-y-5"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <InputField
                name="fullName"
                control={form.control}
                label="Full Name"
                type="text"
                placeholder="Enter Your Full Name"
                iconSrc="/icons/user.svg"
              />
              <InputField
                name="email"
                control={form.control}
                label="Email"
                type="email"
                placeholder="Enter Your Email"
                iconSrc="/icons/mail.svg"
              />
              <InputField
                name="password"
                control={form.control}
                label="Password"
                type="password"
                password={true}
                isPasswordVisible={isPasswordVisible}
                togglePasswordVisibility={togglePasswordVisibility}
                placeholder="*****************"
                iconSrc="/icons/password.svg"
              />
              <InputField
                name="confirmPassword"
                control={form.control}
                label="Confirm Password"
                type="password"
                password={true}
                isPasswordVisible={isPasswordVisible}
                togglePasswordVisibility={togglePasswordVisibility}
                placeholder="*****************"
                iconSrc="/icons/password.svg"
              />
              <Button
                type="submit"
                className="mt-8 h-14 py-3.5"
                disabled={isLoading}
              >
                {isLoading ? <Loader2 className="animate-spin" /> : 'Sign Up'}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="mt-5 flex w-full flex-col items-center space-y-5 px-0 py-0">
          <div className="text-base font-medium">
            <span className="text-base font-medium text-slate-600">
              Already Have An Account?{' '}
            </span>
            <Link
              href="/auth/login"
              className="text-base font-semibold text-indigo-800"
            >
              Login
            </Link>
          </div>
          <div className="flex h-[20px] w-full items-center text-slate-600">
            <div className="w-full">
              <Separator className="" />
            </div>
            <div className="mx-4 w-6 text-base font-normal text-slate-600">
              OR
            </div>
            <div className="w-full">
              <Separator className="" />
            </div>
          </div>
          <Button className="flex h-14 w-full items-center rounded-xl bg-slate-100 py-3.5 hover:bg-slate-200">
            <Image
              loading="lazy"
              src="/icons/google.svg"
              alt="Google icon"
              width={24}
              height={24}
              className="mr-2 h-6 w-6"
            />
            <span className="text-base font-semibold text-black">
              Sign Up with Google
            </span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  </div>
);

const SignupPageContainer: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const [isPasswordVisible, setPasswordVisible] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setLoading(false);
    router.push('/auth/account-creation-success');
  };

  return (
    <SignupPage
      form={form}
      isPasswordVisible={isPasswordVisible}
      isLoading={isLoading}
      togglePasswordVisibility={togglePasswordVisibility}
      onSubmit={onSubmit}
    />
  );
};

export default SignupPageContainer;
