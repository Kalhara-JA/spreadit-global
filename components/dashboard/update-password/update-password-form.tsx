'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
});

function UpdatePasswordForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <div className="p-[25px]">
      <div className="border-b pb-[20px] text-xl font-bold text-slate-800">
        Reset Password
      </div>
      <div className="pt-[25px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Admin Email</FormLabel>
                  <FormControl className="col-span-6">
                    <div className="item-center relative flex">
                      <Image
                        src="/icons/add-product/email.svg"
                        alt="search"
                        width={20}
                        height={20}
                        className="absolute m-5 lg:m-5 lg:mt-[30px]"
                      />
                      <Input
                        className="mb-[16px] mt-[10px] bg-slate-100 pl-12 max-sm:w-[340px] lg:h-[60px]"
                        placeholder="Admin@spreaditglobal.com"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormDescription>
                    A Password Reset Link will be sent to your mail
                  </FormDescription>
                  <FormMessage className="col-span-8 flex justify-start" />
                </FormItem>
              )}
            />
            <div className="flex md:justify-end">
              <Button
                type="submit"
                className="mt-[25px] flex gap-[10px] font-medium"
              >
                Send Password Reset Link
                <Image
                  src="/icons/arrow-right.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                />
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default UpdatePasswordForm;
