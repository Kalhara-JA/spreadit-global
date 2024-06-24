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
  productImage: z.instanceof(File).refine((file) => file.size < 7000000, {
    message: 'picture must be less than 7MB.',
  }),
  productName: z
    .string()
    .min(2, {
      message: 'Description is required',
    })
    .max(500),
  whatsappNumber: z
    .string()
    .min(10, { message: 'WhatsApp Number must not be empty' })
    .regex(/^\d+$/, { message: 'WhatsApp Number must be a number' }),
  productQualityRatings: z.string().min(10, 'Subject must not be empty'),
});

const productQualityRatings = [
  { label: 'Terrible', value: 'Terrible' },
  { label: 'Poor', value: 'Poor' },
  { label: 'Average', value: 'Average' },
  { label: 'Good', value: 'Good' },
  { label: 'Excellent', value: 'Excellent' },
  { label: 'Awesome', value: 'Awesome' },
] as const;

function SpecialSourcingForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productImage: undefined,
      productName: '',
      whatsappNumber: '0716306065',
      productQualityRatings: '',
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="flex max-h-full flex-col gap-[20px] bg-white p-[25px] md:w-[600px] xl:h-[860px]">
      <div className="text-2xl font-bold text-slate-800">Source Product</div>
      <div className="text-base text-slate-600">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </div>
      <div className="max-w-[537px]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="productImage"
              render={({ field: { value, onChange, ...fieldProps } }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex w-full items-center justify-center">
                      <label className="dark:hover:bg-bray-800 flex h-72 w-full cursor-pointer flex-col justify-center rounded-[10px] border border-dashed border-indigo-800 bg-indigo-800/10">
                        <div className="flex flex-col items-center justify-center pb-6 pt-5">
                          <Image
                            src="/icons/fileinput.svg"
                            alt="Upload"
                            width={60}
                            height={60}
                          />
                          <p className="text-2xl font-bold text-slate-800">
                            Upload image
                          </p>
                          {value && <p>Current file</p>}
                          <p className="w-[323px] text-center text-base font-normal text-slate-600">
                            Click here or drag your product image here to upload
                          </p>
                        </div>
                        <Input
                          id="productImage"
                          type="file"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              onChange(file);
                            }
                          }}
                          {...fieldProps}
                        />
                      </label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="productName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="item-center flex">
                      <Image
                        src="/icons/specialsourcing/productName.svg"
                        alt="search"
                        width={20}
                        height={20}
                        className="absolute m-2 lg:m-5"
                      />
                      <Input
                        placeholder="Enter Product Name"
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
              name="whatsappNumber"
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
              name="productQualityRatings"
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
                              src="/icons/specialsourcing/selectQuantity.svg"
                              alt="search"
                              width={20}
                              height={20}
                              className=""
                            />
                            {field.value
                              ? productQualityRatings.find(
                                  (productQualityRatings) =>
                                    productQualityRatings.value === field.value,
                                )?.label
                              : 'Select the quantity of the product'}
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
                          {productQualityRatings.map(
                            (productQualityRatings) => (
                              <CommandList key={productQualityRatings.value}>
                                <CommandItem
                                  value={productQualityRatings.label}
                                  key={productQualityRatings.value}
                                  onSelect={() => {
                                    form.setValue(
                                      'productQualityRatings',
                                      productQualityRatings.value,
                                    );
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      'mr-2 h-4 w-4',
                                      productQualityRatings.value ===
                                        field.value
                                        ? 'opacity-100'
                                        : 'opacity-0',
                                    )}
                                  />
                                  {productQualityRatings.label}
                                </CommandItem>
                              </CommandList>
                            ),
                          )}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-28 flex flex-col">
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

export default SpecialSourcingForm;
