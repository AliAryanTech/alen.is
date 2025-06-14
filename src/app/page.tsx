import { LinkButton } from '@/components/ui/link-button'
import { PageTransition } from '@/components/ui/page-transition'
import { DiscordCopy } from '@/components/ui/discord-copy'
import { Signature } from '@/components/ui/signature'
import { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { FaEnvelope, FaLinkedin, FaGithub, FaCalendarCheck, FaWhatsapp } from 'react-icons/fa'

export const metadata: Metadata = {
    title: 'Alen.is',
    description: 'Engineer, developer and creator of cool stuff',
    openGraph: {
        title: 'Alen.is',
        description: 'Engineer, developer and creator of cool stuff',
        url: 'https://alen.is'
    },
    alternates: {
        canonical: '/'
    }
}

export default function Home() {
    const personSchema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Alen.is',
        url: 'https://alen.is',
        image: 'https://alen.is/og.jpg',
        jobTitle: 'Software Engineer',
        worksFor: {
            '@type': 'Organization',
            name: 'Frappe'
        },
        sameAs: [
            'https://github.com/AlenVelocity',
            'https://www.linkedin.com/in/alen-%F0%9F%8E%B6-yohannan-6794a81ba/'
        ],
        knowsAbout: ['Web Development', 'TypeScript', 'Rust', 'AI', 'LLM', 'NextJS', 'Vue']
    }

    return (
        <PageTransition>
            <JsonLd data={personSchema} />
            <div className="container mx-auto max-w-4xl px-4 py-8">
                {/* Hero Section */}
                <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
                    <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between">
                        <div className="flex-1 space-y-4">
                            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
                                Hi, I'm Alen
                            </h1>
                            <p className="max-w-[700px] text-lg text-muted-foreground">
                                I build{' '}
                                <LinkButton href="/cool" className="text-lg">
                                    cool
                                </LinkButton>{' '}
                                stuff.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <LinkButton 
                                    href="mailto:alenyohannan71@gmail.com"
                                    className="flex items-center gap-2"
                                >
                                    <FaEnvelope className="w-4 h-4" />
                                    Email
                                </LinkButton>
                                <LinkButton
                                    href="https://www.linkedin.com/in/alen-%F0%9F%8E%B6-yohannan-6794a81ba/"
                                    target="_blank"
                                    className="flex items-center gap-2"
                                >
                                    <FaLinkedin className="w-4 h-4" />
                                    LinkedIn
                                </LinkButton>
                                <LinkButton 
                                    href="https://github.com/AlenVelocity" 
                                    target="_blank"
                                    className="flex items-center gap-2"
                                >
                                    <FaGithub className="w-4 h-4" />
                                    GitHub
                                </LinkButton>
                                <LinkButton 
                                    href="/meeting"
                                    className="flex items-center gap-2"
                                >
                                    <FaCalendarCheck className="w-4 h-4" />
                                    Meeting
                                </LinkButton>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="my-8 border-muted" />

                {/* About Section */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold tracking-tight">About Me</h2>
                    
                    <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                        <p>
                            I mostly work on web apps, AI projects, and infrastructure. I would say I'm proficient in TS
                            (both server and client w/ NextJS and Vue), Rust, anything LLMs and Transformers related, AWS and
                            GCP. I'm currently working as an Engineer at{' '}
                            <LinkButton href="https://frappe.io" target="_blank" className="text-base">
                                Frappe
                            </LinkButton>
                            , in the{' '}
                            <LinkButton href="https://frappe.cloud" target="_blank" className="text-base">
                                Frappe Cloud
                            </LinkButton>{' '}
                            team.
                        </p>
                        <p>
                            As for my personal life, I'm a huge fan of video games. If I'm not working, I'd be playing some{' '}
                            <LinkButton
                                href="https://en.wikipedia.org/wiki/Role-playing_video_game#Japanese_role-playing_games"
                                target="_blank"
                                className="text-base"
                            >
                                JRPG
                            </LinkButton>
                            ,{' '}
                            <LinkButton href="https://overwatch.blizzard.com" target="_blank" className="text-base">
                                Overwatch
                            </LinkButton>{' '}
                            or{' '}
                            <LinkButton href="/listening" className="text-base">
                                listening
                            </LinkButton>{' '}
                            to{' '}
                            <LinkButton
                                href="https://en.wikipedia.org/wiki/Sumika_(band)"
                                target="_blank"
                                className="text-base"
                            >
                                sumika
                            </LinkButton>
                            , or all of them at the same time (don't ask me how or why). I'm currently playing the{' '}
                            <LinkButton href="https://en.wikipedia.org/wiki/Final_Fantasy_VII" target="_blank" className="text-base">
                                Final Fantasy 7 Remake Trilogy
                            </LinkButton>{' '}
                            if you're interested.
                        </p>
                    </div>

                    <div className="flex items-center justify-between gap-4 mt-8">
                        <div className="flex justify-start">
                            <Signature name="Alen" />
                        </div>
                    </div>
                </section>

                <hr className="my-8 border-muted" />

                {/* Contact Section */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
                    <div className="text-muted-foreground text-base leading-relaxed">
                        The easiest way to reach me is via{' '}
                        <LinkButton 
                            href="https://wa.me/919744375687" 
                            target="_blank" 
                            className="text-base"
                        >
                            Whatsapp
                        </LinkButton>{' '}
                        or{' '}
                        <DiscordCopy username="notalen" className="text-base">
                            Discord
                        </DiscordCopy>
                        . Otherwise, you can reach me via{' '}
                        <LinkButton 
                            href="mailto:alenyohannan71@gmail.com" 
                            className="text-base"
                        >
                            email
                        </LinkButton>{' '}
                        or{' '}
                        <LinkButton 
                            href="/meeting" 
                            className="text-base"
                        >
                            schedule a meeting
                        </LinkButton>
                        .
                    </div>
                </section>
            </div>
        </PageTransition>
    )
}
