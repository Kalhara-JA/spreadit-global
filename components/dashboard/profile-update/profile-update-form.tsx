'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Calendar } from '@/components/ui/calendar';

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
import { CommandList } from 'cmdk';

import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { Textarea } from '@/components/ui/textarea';
import { ChangeEvent, useState, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const plan = [
  { label: 'Monthly Plan', value: 'Monthly Plan' },
  { label: 'Quarterly Plan', value: 'Quarterly Plan' },
  { label: 'Semi-Annual Plan', value: 'Semi-Annual Plan' },
  { label: 'Annual Plan', value: 'Annual Plan' },
  { label: 'Pay-As-You-Go', value: 'Pay-As-You-Go' },
] as const;

const formSchema = z.object({
  productImage: z.instanceof(File).refine((file) => file.size < 7000000, {
    message: 'picture must be less than 7MB.',
  }),
  email: z.string().email({
    message: 'Email is required',
  }),
  fullName: z
    .string()
    .min(2, {
      message: 'Name is required',
    })
    .max(500),
  gender: z.string().min(2, { message: 'Please choose a gender' }),
  dateOfBirth: z.date({
    required_error: 'A date of birth is required.',
  }),
  contactNo: z
    .string()
    .min(10, { message: 'Please enter a valid phone number' }),
  country: z.string().min(2, { message: 'Please select a valid country' }),
  address: z.string().min(2, { message: 'Please enter a valid address' }),
});

interface ReportFormProps {}

const ProfileUpdateForm: React.FC<ReportFormProps> = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productImage: undefined,
      email: '',
      fullName: '',
      gender: '',
      contactNo: '',
      country: '',
    },
  });
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    console.log(file);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      setFile(selectedFile);
      form.setValue('productImage', selectedFile);
    }
  };

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [file]);

  return (
    <div className="pt-[25px]">
      <div className="mb-[25px] border-b pb-[20px] text-xl font-bold text-slate-800">
        <div className="ml-[25px]">User Account Profile</div>
      </div>
      <div className="ml-[25px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex w-full flex-col gap-3 pb-[25px]">
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="productImage"
                  render={({ field: { value, onChange, ...fieldProps } }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <div className="flex">
                          <label className="dark:hover:bg-bray-800 mr-[25px] flex h-[94px] w-full cursor-pointer items-center rounded-[10px] border border-dashed bg-slate-100">
                            <Image
                              src={
                                previewUrl ??
                                '/icons/profile-update/default.png'
                              }
                              alt="image"
                              width={70}
                              height={70}
                              className="m-3"
                            />
                            <div className="hidden">
                              {value && <p>Current file</p>}
                            </div>
                            <div>
                              <Input
                                id="productImage"
                                type="file"
                                className="border"
                                onChange={() => {
                                  handleFileChange;
                                  onChange(file);
                                }}
                                {...fieldProps}
                              />
                              <div className="ml-[16px] text-sm font-normal text-slate-600 max-sm:text-xs">
                                Max image size 2.5MB (Use a square sized photo
                                e.g. 150px x 150px for best fit.)
                              </div>
                            </div>
                          </label>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex w-full flex-col gap-3 pr-[25px] lg:flex-row">
                <div className="space-y-[43px] lg:w-full">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Product Name</FormLabel>
                        <FormControl className="col-span-6">
                          <div className="item-center relative flex">
                            <Image
                              src="/icons/add-product/email.svg"
                              alt="search"
                              width={20}
                              height={20}
                              className="absolute m-2 lg:m-5"
                            />
                            <Input
                              className="bg-slate-100 pl-12 max-sm:w-[340px] lg:h-[60px] lg:w-full"
                              placeholder="nkwochatochukwu@gmail.com"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="col-span-8 flex justify-start" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gender</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <div className="item-center relative flex">
                              <Image
                                src="/icons/profile-update/gender.svg"
                                alt="search"
                                width={20}
                                height={20}
                                className="absolute m-2 lg:m-5"
                              />
                              <SelectTrigger className="bg-slate-100 pl-12 max-sm:w-[340px] lg:h-[60px] lg:w-full">
                                <SelectValue placeholder="Select a the gender" />
                              </SelectTrigger>
                            </div>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="male">male</SelectItem>
                            <SelectItem value="female">female</SelectItem>
                            <SelectItem value="other">other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="col-span-8 flex justify-start" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="contactNo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact No.</FormLabel>
                        <FormControl>
                          <div className="item-center relative flex">
                            <Image
                              src="/icons/profile-update/phone.svg"
                              alt="search"
                              width={20}
                              height={20}
                              className="absolute m-2 lg:m-5"
                            />
                            <Input
                              className="bg-slate-100 pl-12 max-sm:w-[340px] lg:h-[60px] lg:w-full"
                              placeholder="Contact Number"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="col-span-8 flex justify-start" />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-11/12 space-y-[53px] lg:w-full">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <div className="item-center relative flex">
                            <Image
                              src="/icons/add-product/name.svg"
                              alt="search"
                              width={20}
                              height={20}
                              className="absolute m-2 lg:m-5"
                            />
                            <Input
                              className="bg-slate-100 pl-12 max-sm:w-[340px] lg:h-[60px] lg:w-full"
                              placeholder="Tochukwu Nkwocha"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="col-span-8 flex justify-start" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="dateOfBirth"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Date of birth</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={'outline'}
                                className={cn(
                                  'bg-slate-100 pl-12 max-sm:w-[340px] lg:h-[60px] lg:w-full',
                                  !field.value && 'text-muted-foreground',
                                )}
                              >
                                {field.value ? (
                                  format(field.value, 'PPP')
                                ) : (
                                  <span>MM/DD/YYYY</span>
                                )}
                                <Image
                                  src="/icons/profile-update/date.svg"
                                  alt="search"
                                  width={20}
                                  height={20}
                                  className="ml-auto h-4 w-4"
                                />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() ||
                                date < new Date('1900-01-01')
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Country</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl className="col-span-6">
                              <Button
                                variant="outline"
                                className={cn(
                                  'flex justify-start bg-slate-100 pl-12 max-sm:w-[340px] lg:h-[60px] lg:w-full',
                                  !field.value && 'text-muted-foreground',
                                )}
                              >
                                {field.value
                                  ? plan.find(
                                      (plan) => plan.value === field.value,
                                    )?.label
                                  : 'Select'}
                                <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-[200px] p-0">
                            <Command>
                              <CommandInput placeholder="Search Type" />
                              <CommandEmpty>No subjects</CommandEmpty>
                              <CommandGroup>
                                {plan.map((plan) => (
                                  <CommandList key={plan.value}>
                                    <CommandItem
                                      value={plan.label}
                                      onSelect={() => {
                                        form.setValue('country', plan.value);
                                      }}
                                    >
                                      <Check
                                        className={cn(
                                          'mr-2 h-4 w-4',
                                          plan.value === field.value
                                            ? 'opacity-100'
                                            : 'opacity-0',
                                        )}
                                      />
                                      {plan.label}
                                    </CommandItem>
                                  </CommandList>
                                ))}
                              </CommandGroup>
                            </Command>
                          </PopoverContent>
                        </Popover>
                        <FormMessage className="col-span-8 flex justify-start" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex flex-col pr-[25px]">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Textarea
                          className="bg-slate-100 max-sm:w-[340px] lg:h-32 lg:w-full"
                          placeholder="2 Oremeji Street, Agodo, Egbe, Lagos"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="col-span-8 flex justify-start" />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex pr-[25px] md:justify-end">
              <Button
                type="submit"
                className="item-center mb-[25px] h-[49px] gap-2 text-base font-medium lg:w-[203px]"
              >
                <Image
                  src="/icons/profile-update/user.svg"
                  alt="search"
                  width={20}
                  height={20}
                  className="fill-white"
                />
                Update Profile
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ProfileUpdateForm;
