import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

const WHATSAPP_RECEIPT_URL = 'https://wa.me/919115551699';

type DonateSectionProps = {
  locale: string;
};

/**
 * Donation options: bank transfer, WhatsApp receipt link, and PhonePe QR image.
 *
 * @param props - Section props.
 * @param props.locale - Active locale for translations.
 * @returns Donate section markup.
 */
export const DonateSection = async (props: DonateSectionProps) => {
  const t = await getTranslations({
    locale: props.locale,
    namespace: 'Donate',
  });

  return (
    <section
      aria-labelledby="donate-heading"
      className="mt-16 max-w-full min-w-0 overflow-x-clip border-t border-gray-300 pt-8 sm:pt-10"
    >
      <h2 className="text-xl font-bold sm:text-2xl" id="donate-heading">
        {t('title')}
      </h2>
      <blockquote
        className="gurmukhi-quote my-5 border-l-2 border-gray-400 pl-3 text-base leading-relaxed break-words text-gray-800 sm:my-6 sm:pl-4 sm:text-lg"
        lang="pa"
      >
        {t('quote')}
      </blockquote>
      <p className="mb-6 max-w-prose text-base sm:mb-8">{t('description')}</p>

      <div className="grid min-w-0 grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 md:items-start md:gap-12">
        <div className="min-w-0">
          <h3 className="mb-3 text-lg font-semibold text-gray-900 sm:mb-4 sm:text-xl">
            {t('bank_heading')}
          </h3>
          <dl className="space-y-3 text-base">
            <div className="min-w-0">
              <dt className="text-gray-600">{t('account_name_label')}</dt>
              <dd className="break-words text-gray-900">
                {t('account_name_value')}
              </dd>
            </div>
            <div className="min-w-0">
              <dt className="text-gray-600">{t('account_number_label')}</dt>
              <dd className="font-mono break-all text-gray-900 tabular-nums">
                {t('account_number_value')}
              </dd>
            </div>
            <div className="min-w-0">
              <dt className="text-gray-600">{t('ifsc_label')}</dt>
              <dd className="font-mono break-all text-gray-900 tabular-nums">
                {t('ifsc_value')}
              </dd>
            </div>
          </dl>
          <p className="mt-5 text-base sm:mt-6">
            <a
              href={WHATSAPP_RECEIPT_URL}
              className="inline-block max-w-full break-words text-gray-900 underline decoration-gray-400 underline-offset-2 transition-colors duration-300 ease-in-out hover:bg-stone-200/50"
              target="_blank"
              rel="noreferrer noopener"
            >
              {t('whatsapp_receipt')}
            </a>
          </p>
        </div>

        <figure className="flex w-full min-w-0 shrink-0 flex-col items-center md:items-start">
          <div className="relative mx-auto aspect-square w-full max-w-[min(100%,17.5rem)] sm:max-w-[min(100%,20rem)]">
            <Image
              src="/assets/main/qr.jpeg"
              alt={t('qr_alt')}
              fill
              sizes="(max-width: 768px) 100vw, 280px"
              className="object-contain"
            />
          </div>
        </figure>
      </div>
    </section>
  );
};
