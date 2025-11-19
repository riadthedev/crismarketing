import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import ScrollAnimation from "./ScrollAnimation";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  message: z.string().optional(),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Application Received",
      description: "We'll be in touch shortly to schedule your strategy call.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Animated Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none animate-pulse" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollAnimation variant="scaleUp" duration={0.8}>
          <div className="max-w-3xl mx-auto bg-card border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">
            <div className="text-center mb-10">
              <ScrollAnimation variant="fadeUp" delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                  Your Growth Starts Here
                </h2>
              </ScrollAnimation>
              <ScrollAnimation variant="fadeUp" delay={0.3}>
                <p className="text-lg text-gray-400">
                  Book a free strategy call and see how we can fill your pipeline with qualified leads.
                </p>
              </ScrollAnimation>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ScrollAnimation variant="fadeUp" delay={0.4} className="w-full">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="bg-background/50 border-white/10 focus:border-primary transition-all duration-300 focus:shadow-[0_0_10px_rgba(59,130,246,0.2)]" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </ScrollAnimation>
                  <ScrollAnimation variant="fadeUp" delay={0.5} className="w-full">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@company.com" {...field} className="bg-background/50 border-white/10 focus:border-primary transition-all duration-300 focus:shadow-[0_0_10px_rgba(59,130,246,0.2)]" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </ScrollAnimation>
                </div>
                
                <ScrollAnimation variant="fadeUp" delay={0.6}>
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (555) 000-0000" {...field} className="bg-background/50 border-white/10 focus:border-primary transition-all duration-300 focus:shadow-[0_0_10px_rgba(59,130,246,0.2)]" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </ScrollAnimation>
                
                <ScrollAnimation variant="fadeUp" delay={0.7}>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Message (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your business goals..." 
                            className="min-h-[120px] bg-background/50 border-white/10 focus:border-primary transition-all duration-300 focus:shadow-[0_0_10px_rgba(59,130,246,0.2)]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </ScrollAnimation>

                <ScrollAnimation variant="scaleUp" delay={0.8}>
                  <Button type="submit" className="w-full bg-primary text-background hover:bg-primary/90 font-bold text-lg h-12 shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300">
                    Book My Free Strategy Call
                  </Button>
                </ScrollAnimation>
                
                <ScrollAnimation variant="fadeUp" delay={0.9}>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    No strings attached. Just actionable insights to help your business grow.
                  </p>
                </ScrollAnimation>
              </form>
            </Form>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
