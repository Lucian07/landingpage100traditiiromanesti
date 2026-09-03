import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { CheckCircle2, Facebook, Instagram, Loader2, Mail, Music2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "@/components/Reveal";
import { siteContent } from "@/content/site-content";
import { supabase } from "@/integrations/supabase/client";

const socialIcons = { facebook: Facebook, instagram: Instagram, tiktok: Music2 };

const schema = z.object({
  nume: z
    .string()
    .trim()
    .min(2, { message: "Te rugăm să introduci numele (minim 2 caractere)." })
    .max(100, { message: "Numele poate avea maximum 100 de caractere." }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Te rugăm să introduci adresa de email." })
    .email({ message: "Adresa de email nu pare validă." })
    .max(255, { message: "Adresa de email este prea lungă." }),
  telefon: z.string().trim().max(30, { message: "Numărul de telefon este prea lung." }).optional(),
  subiect: z.string().optional(),
  mesaj: z
    .string()
    .trim()
    .min(10, { message: "Mesajul trebuie să aibă minim 10 caractere." })
    .max(2000, { message: "Mesajul poate avea maximum 2000 de caractere." }),
  website: z.string().optional(), // honeypot anti-spam
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const { contact } = siteContent;
  const [succes, setSucces] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { nume: "", email: "", telefon: "", subiect: "", mesaj: "", website: "" },
  });

  const onSubmit = async (values: FormValues) => {
    // Honeypot: dacă e completat, nu trimitem nimic
    if (values.website) return;

    const { error } = await supabase.from("contact_messages").insert({
      nume: values.nume,
      email: values.email,
      telefon: values.telefon || null,
      subiect: values.subiect || null,
      mesaj: values.mesaj,
    });

    if (error) {
      toast.error("Mesajul nu a putut fi trimis. Te rugăm să încerci din nou.");
      return;
    }

    setSucces(true);
    form.reset();
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl md:text-5xl">{contact.titlu}</h2>
          <p className="mt-4 text-base text-muted-foreground">{contact.subtitlu}</p>
        </Reveal>

        <div className="mt-12 grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <Reveal>
            {succes && (
              <p
                role="status"
                className="mb-6 flex items-center gap-2 rounded-lg border border-verde/40 bg-card p-4 text-sm text-verde"
              >
                <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                {contact.succes}
              </p>
            )}

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" noValidate>
                {/* Honeypot ascuns pentru boți */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input id="website" tabIndex={-1} autoComplete="off" {...form.register("website")} />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="nume"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nume *</FormLabel>
                        <FormControl>
                          <Input placeholder="Numele tău" {...field} />
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
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="nume@exemplu.ro" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="telefon"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefon (opțional)</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="07xx xxx xxx" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subiect"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subiect</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Alege un subiect" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {contact.subiecte.map((s) => (
                              <SelectItem key={s} value={s}>
                                {s}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="mesaj"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mesaj *</FormLabel>
                      <FormControl>
                        <Textarea rows={6} placeholder="Cum te putem ajuta?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                  )}
                  {form.formState.isSubmitting ? "Se trimite..." : "Trimite mesajul"}
                </Button>
              </form>
            </Form>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-lg border border-border bg-card p-6 shadow-soft">
              <h3 className="font-serif text-xl font-semibold">{contact.dateContact.titlu}</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
                  <a href={`mailto:${contact.dateContact.email}`} className="hover:text-brand">
                    {contact.dateContact.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
                  <a href={`tel:${contact.dateContact.telefon}`} className="hover:text-brand">
                    {contact.dateContact.telefon}
                  </a>
                </li>
              </ul>

              <p className="mt-6 text-sm font-medium">Urmărește-ne</p>
              <ul className="mt-3 flex gap-3">
                {contact.social.map((s) => {
                  const Icon = socialIcons[s.retea];
                  return (
                    <li key={s.retea}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border transition-colors hover:border-ocru hover:text-ocru"
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
