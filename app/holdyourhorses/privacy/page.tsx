import type { Metadata } from "next";

const description =
  "Privacy policy for Hold Your Horses, the multitouch horse-holding game by Friend Who Codes.";

export const metadata: Metadata = {
  title: "Hold Your Horses: Privacy Policy",
  description,
  alternates: { canonical: "/holdyourhorses/privacy" },
  openGraph: {
    title: "Hold Your Horses: Privacy Policy | Friend Who Codes",
    description,
    url: "/holdyourhorses/privacy",
  },
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight mt-10 mb-4 border-b border-line pb-2">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-6 leading-relaxed text-lg">{children}</p>;
}

export default function HoldYourHorsesPrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-display text-3xl md:text-4xl font-medium tracking-tight mt-10 mb-4">
        Hold Your Horses: Privacy Policy
      </h1>
      <P>Last updated: 8 October 2026</P>
      <P>
        Hold Your Horses is a game published on Google Play by Friend Who Codes (&ldquo;we&rdquo;). This policy explains
        what data the game handles.
      </P>

      <H2>What stays on your phone</H2>
      <P>
        Your best times, the horses and worlds you have unlocked, your sound setting and your purchases (&ldquo;No
        Ads&rdquo; or &ldquo;Pro&rdquo;) are stored only on your device. The game has no accounts and we run no servers
        for it, so we never receive this data.
      </P>

      <H2>Ads</H2>
      <P>
        The free version shows ads from Google AdMob: an occasional full-screen ad between runs, and an optional ad you
        can choose to watch to keep a run going. To show and measure ads, Google may collect your device&rsquo;s
        advertising ID, approximate location from your IP address, device and app information, and how you interact
        with ads. Google&rsquo;s use of this data is described in{" "}
        <a className="underline" href="https://policies.google.com/technologies/partner-sites">
          How Google uses information from sites or apps that use its services
        </a>
        .
      </P>
      <P>
        If you are in the European Economic Area, the UK or Switzerland, the game asks for your consent before
        personalised ads are shown. You can change your choice at any time from &ldquo;Privacy choices&rdquo; on the
        main menu. You can also reset or delete your advertising ID in your phone&rsquo;s settings.
      </P>

      <H2>Purchases</H2>
      <P>
        &ldquo;No Ads&rdquo; and &ldquo;Pro&rdquo; are sold through Google Play. Google processes the payment; we only
        receive confirmation that a purchase happened, never your payment details.
      </P>

      <H2>Sharing and invites</H2>
      <P>
        When you tap Share or Invite friends, the game creates an image of your result on your phone and hands it to
        the app you choose, together with a link to the game on Google Play. Nothing is uploaded by us.
      </P>

      <H2>Children</H2>
      <P>
        The game is not directed at children under 13, and we do not knowingly collect personal information from them.
      </P>

      <H2>Contact</H2>
      <P>
        Questions about this policy:{" "}
        <a className="underline" href="mailto:hunkwhocodes@gmail.com">
          hunkwhocodes@gmail.com
        </a>
      </P>
    </main>
  );
}
