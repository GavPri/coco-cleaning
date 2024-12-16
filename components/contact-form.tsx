'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { CalendarIcon, Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  address: z.string().min(5, { message: 'Please enter a valid address.' }),
  city: z.string().min(2, { message: 'Please enter a valid city.' }),
  postcode: z.string().min(5, { message: 'Please enter a valid postcode.' }),
  serviceType: z.enum(['standard', 'deep'], {
    required_error: 'Please select a service type.',
  }),
  propertyType: z.enum(['house', 'apartment', 'office', 'other'], {
    required_error: 'Please select a property type.',
  }),
  bedrooms: z.string().min(1, { message: 'Please enter the number of bedrooms.' }),
  bathrooms: z.string().min(1, { message: 'Please enter the number of bathrooms.' }),
  preferredDate: z.date({
    required_error: 'Please select a date.',
  }),
  additionalServices: z.array(z.string()).optional(),
  specialInstructions: z.string().optional(),
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      postcode: '',
      serviceType: 'standard',
      propertyType: 'house',
      bedrooms: '',
      bathrooms: '',
      additionalServices: [],
      specialInstructions: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)
    setIsSubmitting(false)
    // Here you would typically send the form data to your server
    alert('Form submitted successfully!')
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-12 px-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="07123456789" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="123 Cleaning St" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="Manchester" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="postcode"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Postcode</FormLabel>
                <FormControl>
                  <Input placeholder="M1 1AA" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="serviceType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="standard">Standard Clean</SelectItem>
                  <SelectItem value="deep">Deep Clean</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="propertyType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Property Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a property type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="office">Office</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="bedrooms"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Bedrooms</FormLabel>
                <FormControl>
                  <Input type="number" min="0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bathrooms"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Bathrooms</FormLabel>
                <FormControl>
                  <Input type="number" min="0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="preferredDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Preferred Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date() || date < new Date("1900-01-01")
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
          name="additionalServices"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Additional Services</FormLabel>
                <FormDescription>
                  Select any additional services you require.
                </FormDescription>
              </div>
              {['Oven Cleaning', 'Window Cleaning', 'Carpet Cleaning', 'Upholstery Cleaning'].map((item) => (
                <FormField
                  key={item}
                  control={form.control}
                  name="additionalServices"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="specialInstructions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Special Instructions</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Any special instructions or requirements..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </Form>
  )
}

