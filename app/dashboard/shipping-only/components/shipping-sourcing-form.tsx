'use client';

import React from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { CommandList } from 'cmdk';
import Image from 'next/image';

const formSchema = z.object({
  shippingName: z.string().min(10, {
    message: 'Name is required',
  }),
  shippingEmail: z.string().email({
    message: 'Email is required',
  }),
  phoneNumber: z
    .string()
    .min(10, { message: 'WhatsApp Number must not be empty' })
    .regex(/^\d+$/, { message: 'WhatsApp Number must be a number' }),
  shippingfrom: z.string().min(10, 'select the country you are shipping from'),
  shippingto: z.string().min(10, 'select the country you are shipping to'),
  grossweight: z.string().min(10, 'select the gross weight of the product'),
});

const shippingfrom = [
  { label: 'Terrible', value: 'Terrible' },
  { label: 'Poor', value: 'Poor' },
  { label: 'Average', value: 'Average' },
  { label: 'Good', value: 'Good' },
  { label: 'Excellent', value: 'Excellent' },
  { label: 'Awesome', value: 'Awesome' },
] as const;

const shippingto = [
  { label: 'Terrible', value: 'Terrible' },
  { label: 'Poor', value: 'Poor' },
  { label: 'Average', value: 'Average' },
  { label: 'Good', value: 'Good' },
  { label: 'Excellent', value: 'Excellent' },
  { label: 'Awesome', value: 'Awesome' },
] as const;

const grossweight = [
  { label: 'Terrible', value: 'Terrible' },
  { label: 'Poor', value: 'Poor' },
  { label: 'Average', value: 'Average' },
  { label: 'Good', value: 'Good' },
  { label: 'Excellent', value: 'Excellent' },
  { label: 'Awesome', value: 'Awesome' },
] as const;

function ShippingOnlyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      shippingName: '',
      shippingEmail: '',
      phoneNumber: '',
      shippingfrom: '',
      shippingto: '',
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="flex max-h-full w-96 flex-col gap-[20px] bg-white p-[25px] md:w-[567px] xl:h-[860px]">
      <div className="text-2xl font-bold text-slate-800">
        China Office Contact
      </div>
      <div className="text-base text-slate-600">
        Complete this short form and one of our customer representatives will
        reach out to you within 1 business day.
      </div>
      <div className="max-w-[537px]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="shippingName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="item-center relative flex">
                      <Image
                        src="/icons/name.svg"
                        alt="search"
                        width={20}
                        height={20}
                        className="absolute m-2 lg:m-5"
                      />
                      <Input
                        placeholder="Enter Your WhatsApp Number"
                        className="w-full rounded-[10px] bg-slate-100 pl-12 text-sm xl:h-[60px]"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="shippingEmail"
              render={({ field }) => (
                <FormItem>
                  <div className="item-center relative flex">
                    <Image
                      src="/icons/specialsourcing/email.svg"
                      alt="search"
                      width={20}
                      height={20}
                      className="absolute m-2 lg:m-5"
                    />

                    <FormControl>
                      <Input
                        placeholder="Enter Your Email"
                        className="w-full rounded-[10px] bg-slate-100 pl-12 text-sm xl:h-[60px]"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="item-center relative flex">
                      <Image
                        src="/icons/specialsourcing/phone.svg"
                        alt="search"
                        width={20}
                        height={20}
                        className="absolute m-2 lg:m-5"
                      />
                      <Input
                        placeholder="Enter Your Phone"
                        className="rounded-[10px] bg-slate-100 pl-12 text-sm xl:h-[60px]"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="shippingfrom"
              render={({ field }) => (
                <FormItem>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            'w-full justify-between rounded-[10px] bg-slate-100 xl:h-[60px]',
                            !field.value && 'text-muted-foreground',
                          )}
                        >
                          <div className="flex gap-2">
                            <Image
                              src="/icons/country.svg"
                              alt="search"
                              width={20}
                              height={20}
                              className=""
                            />
                            {field.value
                              ? shippingfrom.find(
                                  (shippingfrom) =>
                                    shippingfrom.value === field.value,
                                )?.label
                              : 'Which Country are you Shipping from?'}
                          </div>
                          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                      <Command>
                        <CommandInput placeholder="Search Type" />
                        <CommandEmpty>No subjects</CommandEmpty>
                        <CommandGroup>
                          {shippingfrom.map((shippingfrom) => (
                            <CommandList key={shippingfrom.value}>
                              <CommandItem
                                value={shippingfrom.label}
                                key={shippingfrom.value}
                                onSelect={() => {
                                  form.setValue(
                                    'shippingfrom',
                                    shippingfrom.value,
                                  );
                                }}
                              >
                                <Check
                                  className={cn(
                                    'mr-2 h-4 w-4',
                                    shippingfrom.value === field.value
                                      ? 'opacity-100'
                                      : 'opacity-0',
                                  )}
                                />
                                {shippingfrom.label}
                              </CommandItem>
                            </CommandList>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="shippingto"
              render={({ field }) => (
                <FormItem>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            'w-full justify-between rounded-[10px] bg-slate-100 xl:h-[60px]',
                            !field.value && 'text-muted-foreground',
                          )}
                        >
                          <div className="flex gap-2">
                            <Image
                              src="/icons/country.svg"
                              alt="search"
                              width={20}
                              height={20}
                              className=""
                            />
                            {field.value
                              ? shippingto.find(
                                  (shippingto) =>
                                    shippingto.value === field.value,
                                )?.label
                              : 'Which Country are you Shipping to?'}
                          </div>
                          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                      <Command>
                        <CommandInput placeholder="Search Type" />
                        <CommandEmpty>No subjects</CommandEmpty>
                        <CommandGroup>
                          {shippingto.map((shippingto) => (
                            <CommandList key={shippingto.value}>
                              <CommandItem
                                value={shippingto.label}
                                key={shippingto.value}
                                onSelect={() => {
                                  form.setValue('shippingto', shippingto.value);
                                }}
                              >
                                <Check
                                  className={cn(
                                    'mr-2 h-4 w-4',
                                    shippingto.value === field.value
                                      ? 'opacity-100'
                                      : 'opacity-0',
                                  )}
                                />
                                {shippingto.label}
                              </CommandItem>
                            </CommandList>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="grossweight"
              render={({ field }) => (
                <FormItem>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            'w-full justify-between rounded-[10px] bg-slate-100 xl:h-[60px]',
                            !field.value && 'text-muted-foreground',
                          )}
                        >
                          <div className="flex gap-2">
                            <Image
                              src="/icons/specialsourcing/weight.svg"
                              alt="search"
                              width={20}
                              height={20}
                              className=""
                            />
                            {field.value
                              ? grossweight.find(
                                  (grossweight) =>
                                    grossweight.value === field.value,
                                )?.label
                              : 'What is the gross weight of your shipment?'}
                          </div>
                          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                      <Command>
                        <CommandInput placeholder="Search Type" />
                        <CommandEmpty>No subjects</CommandEmpty>
                        <CommandGroup>
                          {grossweight.map((grossweight) => (
                            <CommandList key={grossweight.value}>
                              <CommandItem
                                value={grossweight.label}
                                key={grossweight.value}
                                onSelect={() => {
                                  form.setValue(
                                    'grossweight',
                                    grossweight.value,
                                  );
                                }}
                              >
                                <Check
                                  className={cn(
                                    'mr-2 h-4 w-4',
                                    grossweight.value === field.value
                                      ? 'opacity-100'
                                      : 'opacity-0',
                                  )}
                                />
                                {grossweight.label}
                              </CommandItem>
                            </CommandList>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex h-[133px] flex-wrap rounded-[10px] bg-slate-100 p-[25px]">
              Tell us the exact products you are shipping. does it contain
              battery, liquid, powder? Give us as much information as possible.
            </div>
            <div className="flex flex-col">
              <Button type="submit" className="h-[54px]">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default ShippingOnlyForm;
