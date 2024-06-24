'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

const formSchema = z.object({
  search: z.string().min(2, {
    message: 'search',
  }),
});

export default function SearchPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div>
                  <Image
                    loading="lazy"
                    src="/icons/search.svg"
                    alt=""
                    width={19}
                    height={19}
                    className="absolute m-4 h-5 shrink-0"
                  />
                  <Input
                    placeholder={`Search here...`}
                    {...field}
                    className="flex h-[50px] w-[200px] items-center rounded-[10px] border-none px-[50px] placeholder:text-[13px] md:w-[250px] xl:w-[409px]"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
