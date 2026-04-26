'use client';

import Image from 'next/image';
import { useState } from 'react';

const FONT_DISPLAY = 'var(--font-cormorant), Georgia, serif';
const FONT_GU = 'var(--font-noto-gurmukhi), sans-serif';
const TEACHER_IMAGE = '/assets/others/jathedar-simranjeet-singh.jpeg';

const JATHEDAR_PARAGRAPHS = [
  'ਸਤਿਗੁਰੁ ਸਚੇ ਪਾਤਿਸ਼ਾਹ ਨਿਰੰਕਾਰੀ ਜੋਤਿ ਗੁਰੂ ਨਾਨਕ ਸਾਹਿਬ ਜੀ ਨੇ ਸਮੁੱਚੀ ਮਾਨਵਤਾ ਤੇ ਉਧਾਰ ਲਈ ਜਨਮ ਧਾਰਿਆ। ਵੱਖ ਵੱਖ ਥਾਈਂ ਭਰਮਣ ਕਰਕੇ ਬੇਅੰਤ ਭਟਕਿਆ ਨੂੰ ਸਿੱਧੇ ਰਾਹ ਪਾਇਆ ਤੇ ਉਹਨਾਂ ਨੂੰ ਸਬਦ ਦੇ ਲੜ ਲਾਇਆ। ਜਨਮਸਾਖੀਆਂ ਅਨੁਸਾਰ ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਜਿੱਥੇ ਬਾਬਾ ਮਰਦਾਨਾ ਜੀ ਨੂੰ ਆਖਦੇ ਕਿ "ਛੇੜ ਮਰਦਾਨਿਆ ਰਬਾਬ ਕਾਈ ਸਿਫਤ ਖ਼ੁਦਾ ਦੇ ਦੀਦਾਰ ਦੀ ਕਰੀਏ" ਅਤੇ ਉਸ ਅੰਮ੍ਰਿਤ ਰੂਪੀ ਬਾਣੀ ਨੂੰ ਮਾਣਦੇ ਤੇ ਬਾਬਾ ਮਰਦਾਨਾ ਜੀ ਨਾਲ ਰਬਾਬ ਦੀ ਧੁੰਨ ਵਿੱਚ ਉਸ ਦਾ ਕੀਰਤਨ ਕਰਦੇ, ਓਥੇ ਜਨਮਸਾਖੀ ਚ ਇਹੁ ਵੀ ਪੜ੍ਹੀਦਾ ਹੈ ਕਿ ਗੁਰੂ ਸਾਹਿਬ ਉਸ ਗਾਵੀ ਹੋਈ ਬਾਣੀ ਨੂੰ ਕਾਗਦੁ ਪਰ ਲਿਖ ਲੈਂਦੇ ਸਨ। ਸਾਖੀਆਂ ਸਾਖ ਭਰਦੀਆਂ ਨੇ ਕਿ ਜਦੋਂ ਉਦਾਸੀਆਂ ਵੇਲੇ ਤੁਰਦੇ ਤਾਂ ਵੱਡੇ ਬੇਬੇ ਜੀ ਬੇਬੇ ਨਾਨਕੀ ਜੀ ਉਹਨਾਂ ਨੂੰ ਸਿਆਹੀ ਦੀਆਂ ਵੱਟੀਆਂ ਬਣਾ ਕਰ ਨਾਲ ਦਿੰਦੇ ਜਿਨ੍ਹਾਂ ਨੂੰ ਲੋੜ ਅਨੁਸਾਰ ਜਲ ਲਗਾ ਕੇ ਉਸ ਵਿਚ ਲੇਖਣੀ/ਕਲਮ ਡੋਬ ਕਰ ਲਿਖਿਆ ਜਾ ਸਕਦਾ ਸੀ। ਸੋ ਏਥੋ ਹੀ ਗੁਰਬਾਣੀ ਲਿਖਣ ਪਰੰਪਰਾ ਦਾ ਮੁੱਢ ਬੱਝਦਾ ਹੈ ਜੋ ਗੁਰੂ ਪਿਤਾ ਜੀ ਨੇ ਆਪ ਏਸ ਦੀ ਆਰੰਭਤਾ ਕੀਤੀ।',
  'ਹੱਥ ਲਿਖਤ ਦਾ ਇਤਿਹਾਸ ਬਹੁਤ ਪੁਰਾਣਾ ਹੈ। ਮਨੁੱਖ ਬਹੁਤ ਲੰਮੇ ਸਮੇਂ ਤੋਂ ਲਿਖਦਾ ਆ ਰਿਹਾ ਹੈ। ਗੁਰਮੁਖੀ ਲਿਖਣ ਪਰੰਪਰਾ ਵੀ ਬਹੁਤ ਹੀ ਪੁਰਾਣੀ ਹੈ। ਗੁਰਮੁਖੀ ਸਮਰਾਟ ਅਸ਼ੋਕ ਦੇ ਵੇਲੇ ਦੇ ਸ਼ਿਲਾਲੇਖਾਂ ਚ ਅਤੇ ਅਗਰ ਏਸ ਤੋਂ ਵੀ ਪਹਿਲੇ ਜਾਈਏ ਤਾਂ ਮਹੋਂਜਦੜੋ ਸਭਿਅਤਾ ਦੇ ਨਾਲ ਵੀ ਸੰਬੰਧ ਮਿਲ ਜਾਂਦੇ ਨੇ। ਗੁਰਮੁਖੀ ਜਦੋਂ ਗੁਰੂ ਸਾਹਿਬ ਜੀ ਤੱਕ ਪਹੁੰਚੀ ਤਾਂ ਇਹ ਬਹੁਤ ਜਿਆਦਾ ਵਿਕਸਿਤ ਹੋ ਚੁੱਕੀ - ਪੁਰਾਣੇ ਪੰਡਿਤਾਂ ਵਿਦਵਾਨਾ ਨੇ ਬਹੁਤ ਮਹੀਨ ਖੋਜ ਤੇ ਮਿਹਨਤ ਨਾਲ ਏਸ ਨੂੰ ਵਿਕਸਿਤ ਤੇ ਸੰਪੂਰਨ ਕੀਤਾ।',
  'ਪੁਰਾਣੇ ਸਮਿਆਂ ਚ ਅਗਰ ਕੋਈ ਕਿਤਾਬ ਲਿਖੀ ਜਾਂਦੀ ਤਾਂ ਹੁਣ ਵਾਂਗ ਛਾਪਾ ਨਾ ਹੋਣ ਕਰਕੇ ਲਿਖਾਰੀਆਂ ਨੂੰ ਏਹ ਕਾਰਜ ਦਿਤਾ ਜਾਂਦਾ ਸੀ। ਤੇ ਉਹ ਲਿਖਾਰੀ ਕਿਤਾਬਾਂ ਦੇ ਵੱਧ ਤੋ ਵੱਧ ਉਲੱਥੇ ਕਰਦੇ ਜਿਵੇ ਅੱਜਕੱਲ੍ਹ ਛਾਪੇ ਵਾਲੀ ਮਸ਼ੀਨ ਕਰਦੀ ਹੈ। ਉਹ ਲਿਖਾਰੀ ਆਪਣੀ ਕਲਾ ਚ ਨਿਪੁੰਨ ਹੁੰਦੇ ਸਨ - ਕੇਵਲ ਅਖਰਾਂ ਦਾ ਗਿਆਨ ਜਾਂ ਸੁੰਦਰ ਲਿਖਾਵਟ ਹੀ ਇਕ ਲਿਖਾਰੀ ਨਈ ਬਣਾ ਸਕਦੀ; ਉਸ ਲਈ ਇਕ ਸਾਰ ਲਿਖਣਾ, ਸਿਆਹੀ ਦੀ ਛਿੱਟ ਨਾ ਪੈਣ ਦੇਣਾ, ਕਾਗਜ਼ ਤੇ ਬੇਨਿਸ਼ਾਨ ਲੀਕਾਂ ਮਾਰਨੀਆਂ ਅਤੇ ਆਦਿ ਤੋ ਅੰਤ ਇਕੋ ਜਿਹਾ ਹਾਸ਼ੀਆ ਖਿੱਚ ਕੇ ਇਕਸਾਰਤਾ ਚ ਲਿਖਣਾ ਜਰੂਰੀ ਹੁੰਦਾ ਹੈ।',
  'ਗੁਰਬਾਣੀ ਲਿਖਣ ਪਰੰਪਰਾ ਏਸ ਆਮ ਲਿਖਣ ਸ਼ੈਲੀ ਤੋ ਥੌੜੀ ਅੱਡਰੀ ਹੈ। ਪੁਰਾਣੀਆਂ ਬੀੜਾਂ ਦੇ ਅਧਿਐਨ ਨਾਲ ਏਹੁ ਪਰਤੱਖ ਹੁੰਦਾ ਹੈ ਕਿ ਪੁਰਾਤਨ ਲਿਖਾਰੀ ਕਿੰਨੇ ਸੂਝ ਬੂਝ ਵਾਲੇ ਸਨ। ਲਿਖਾਵਟ ਏਨੀ ਸੋਹਣੀ ਕਿ ਛਾਪੇ ਨੂੰ ਵੀ ਮਾਤ ਪੈਂਦੀ ਏ। ਗੁਰਬਾਣੀ ਦੀ ਲਿਖਾਈ ਦਾ ਵੱਡਾ ਨੁਕਤਾ ਹੈ ਉਸ ਵਿੱਚ ਵਿਆਕਰਣਕ ਦ੍ਰਿਸ਼ਟੀ ਤੋ ਮੁਕਤਾ ਸਿਹਾਰੀ ਔਂਕੜ ਕਿਥੇ ਕਿਥੇ ਵਰਤਨੇ ਨੇ। ਗੁਰੂ ਸਾਹਿਬ ਦੀ ਸਿਖਲਾਈ ਨੇ ਬਹੁਤੇ ਲਿਖਾਰੀਆਂ ਨੂੰ ਏਸ ਕਲਾ ਚ ਨਿਪੁੰਨ ਕੀਤਾ ਤਾਂ ਕਿ ਸ਼ਬਦ ਜੋੜ ਦਾ ਭੇਦ ਵਿਆਕਰਣ ਦੀ ਭਿੰਨਤਾ ਨਾਲ ਵਖਰਾ ਦਰਸਾਇਆ ਜਾ ਸਕੇ।',
  'ਜਨਮਸਾਖੀਆਂ ਅਨੁਸਾਰ ਗੁਰੂ ਨਾਨਕ ਸਾਹਿਬ ਜੀ ਪਾਸ ਕਰਤਾਰਪੁਰ ਆ ਕੇ ਭਾਈ ਮਨਸੁਖ, ਭਾਈ ਭਗੀਰਥ, ਭਾਈ ਪੈੜਾ ਮੋਖਾ, ਭਾਈ ਹੱਸੂ ਲੁਹਾਰ, ਭਾਈ ਸ਼ੀਹਾਂ ਛੀਬਾਂ, ਭਾਈ ਸੈਦੋ ਘੇਉ - ਬਾਣੀ ਲਿਖਣ ਦਾ ਕਾਰਜ ਕਰਦੇ ਰਹੇ ਹਨ। ਅੱਗੋ ਇਹੁ ਪੋਥੀਆਂ ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ ਪਾਸ ਪਹੁੰਚੀਆਂ, ਫੇਰ ਗੁਰੂ ਅਮਰਦਾਸ ਜੀ ਨੇ ਇਹਨਾਂ ਦੀਆਂ ਅੱਗੋਂ ਨਕਲਾਂ ਕਰਵਾਈਆਂ। ਮੁੜ ਗੁਰੂ ਅਰਜੁਨ ਦੇਵ ਜੀ ਏਸ ਪਰੰਪਰਾ ਨੂੰ ਅੱਗੇ ਵਧਾਉਂਦੇ ਨੇ - ਭਾਈ ਗੁਰਦਾਸ ਜੀ ਨੂੰ ਲਿਖਾਰੀ ਥਾਪ ਕੇ ਆਦਿ ਬੀੜ ਦੀ ਰਚਨਾ ਕੀਤੀ ਜਿਸ ਵਿੱਚ ਸਾਰੇ ਗੁਰੂ ਸਾਹਿਬਾਨਾਂ, ਸ਼੍ਰੋਮਣੀ ਭਗਤਾਂ, ਭੱਟ ਸਾਹਿਬਾਨਾਂ ਅਤੇ ਪਿਆਰੇ ਗੁਰਸਿਖੜਿਆਂ ਦੀ ਬਾਣੀ ਸ਼ਾਮਿਲ ਹੈ। ਫੇਰ ਸ੍ਰੀ ਕਲਗੀਧਰ ਪਿਤਾ ਜੀ ਨੇ ਸੰਪੂਰਨ ਆਦਿ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੀ ਬਾਣੀ ਭਾਈ ਮਨੀ ਸਿੰਘ ਸ਼ਹੀਦ ਜੀ ਪਾਸੋਂ ਲੜੀਵਾਰ ਰੂਪ ਚ ਲਿਖਵਾਈ, ਅਤੇ ਉਸੇ ਬੀੜ ਨੂੰ ਨਾਂੜੇਦ ਵਿਖੇ ਗੁਰਿਆਈ ਦਾ ਤਿਲਕ ਦੇ ਕਰ ਸਿਖਾਂ ਨੂੰ ਗੁਰੂ ਕੇ ਲੜ ਲਾ ਕੇ ਸਚਖੰਡ ਪਿਆਨਾ ਕੀਤਾ।',
  'ਮੁੜ ਉਸ ਤੋਂ ਉਪਰੰਤ ਬਾਬਾ ਦੀਪ ਸਿੰਘ ਜੀ ਸ਼ਹੀਦ ਵਰਗੇ ਲਿਖਾਰੀਆਂ ਨੇ ਅਗਾਂਹ ਉਸ ਪਾਵਨ ਬੀੜ ਦੇ ਉਤਾਰੇ ਕੀਤੇ। ਸੇਵਪੰਥੀ, ਨਿਰਮਲੇ ਅਤੇ ਉਦਾਸੀਨ ਸੰਪਰਦਾਇ ਦੇ ਵਿਦਵਾਨਾਂ ਨੇ ਵੱਖੋ ਵੱਖੋ ਉਪਰਾਲੇ ਕੀਤੇ ਅਤੇ ਬੀੜ ਦੇ ਅਗਾਂਹ ਉਤਾਰੇ ਕੀਤੇ। ਏਸ ਉਤਾਰਿਆਂ ਚ ਬੀੜਾਂ ਦੇ ਅਕਾਰ, ਲਿਖਾਵਟ, ਹਾਸ਼ੀਏ, ਜਿਲਦ, ਪੱਤਰਿਆਂ ਦੀ ਗਿਣਤੀ ਸਬ ਅੱਡੋ ਅੱਡੋ ਵਿਸ਼ੇਸ਼ ਤੇ ਸੁੰਦਰ ਹਨ। ਅਸੀ ਅੱਜ ਵੀ ਉਹਨਾਂ ਵਿਚੋ ਕਈ ਬੀੜਾਂ ਦੇ ਦਰਸ਼ਨ ਕਰ ਸਕਦੇ ਆ।',
  'ਫੇ ਉੰਨੀਵੀਂ ਸਦੀ ਦੇ ਆਖੀਰ ਚ ਅੰਗਰੇਜਾਂ ਦੇ ਰਾਜ ਸਮੇ ਪਹਿਲੀ ਬੀੜ ਛਾਪੇਖਾਨੇ ਚ ਛਪਦੀ ਹੈ। ਜਿਸ ਤੇ ਪੰਥ ਨੇ ਬਹੁਤ ਵਿਰੋਧ ਵੀ ਕੀਤਾ ਕਿਉਂਕਿ ਏਸ ਤੋ ਪਹਿਲਾ ਪੰਥ ਚ ਕੇਵਲ ਹਥਲਿਖਤ ਬੀੜਾਂ ਹੀ ਮੌਜੂਦ ਸਨ। ਪਰੰਤੂ ਸਮੇ ਦੀ ਢਿਲਿਆਈ ਨੇ ਛਾਪੇ ਖਾਨੇ ਦੀ ਮਾੜੀ ਪਿਰਤ ਸ਼ੁਰੂ ਕਰ ਦਿੱਤੀ। ੧੯੦੦ ਤੋਂ ਬਾਅਦ ਬੀੜਾਂ ਦਾ ਛਪਣਾ ਬਹੁਤ ਹੀ ਆਮ ਹੋ ਗਿਆ। ਹੁਣ ਹਾਲ ਏਹੁ ਹੈ ਕਿ ਕੋਈ ਵੀ ਲਿਖਣ ਨੂੰ ਲੰਮੇਰਾ ਕਾਰਜ ਮੰਨ ਕੇ ਏਹੁ ਸੇਵਾ ਕਰਣੀ ਨਈ ਚਾਹ ਰਿਹਾ ਕਿਉਂਕਿ ਛਪਿਆ ਛਪਾਇਆ ਸਬ ਕੁਜ ਹਾਜ਼ਿਰ ਹੋ ਰਿਹਾ ਹੈ।',
  'ਗੜ ਅਨੰਦ ਵੀ ਏਸੇ ਸਮੇਂ ਚ ਗੁਰਬਾਣੀ ਲਿਖਣ ਪਰੰਪਰਾ ਲਈ ਕਾਰਜ਼ਸ਼ੀਲ ਹੈ। ਤਕਰੀਬਨ ੨੦੧੮ ਈ ਤੋ ਵੱਖ ਵੱਖ ਸ਼ਹਿਰਾਂ ਚ ਕਾਰਜ਼ਸ਼ਾਲਾ ਲਗਾ ਕਰ ਸੰਗਤਿ ਚ ਏਸ ਲਿਖਣ ਪਰੰਪਰਾ ਦਾ ਪ੍ਰਚਾਰ ਪ੍ਰਸਾਰ ਕਰ ਰਹੀ ਹੈ। ਹਰ ਸਾਲ ਜਨਵਰੀ-ਫਰਵਰੀ ਚ ਵੱਡਾ ਸਾਲਾਨਾ ਕੈਂਪ "ਕੈਂਪ ਲਿਖਾਰੀਆਂ" ਦੇ ਨਾਮ ਹੇਠ ੨੦੨੦ ਤੋ ਹਰ ਸਾਲ ਲਗਾਇਆ ਜਾਂਦਾ ਹੈ ਜਿਸ ਵਿਚ ਬੱਚਿਆ ਨੂੰ ਗੁਰਬਾਣੀ ਲਿਖਣ ਪਰੰਪਰਾ ਦੇ ਨਾਲ-ਨਾਲ ਗੁਰਸਿਖ ਜੀਵਨ ਜਾਂਚ ਵੀ ਸਿਖਾਈ ਜਾਂਦੀ ਹੈ।',
  'ਜਥੇਬੰਦਕ ਤੌਰ ਤੇ ਕੁਜ ਸੇਵਾਦਾਰ - ਵੀਰ ਇੰਦਰਜੀਤ ਸਿੰਘ ਜੀ (ਜਰਮਨੀ), ਭੈਣਜੀ ਇਸ਼ਮੀਨ ਕੌਰ ਜੀ (ਦਿੱਲੀ), ਭੈਣ ਨਿਤਜੱਪ ਕੌਰ ਜੀ (ਜਲੰਧਰ), ਭੈਣ ਦਿੱਵਿਆ ਕਲਵਾਣੀ ਜੀ (ਉਲਾਸਨਗਰ), ਵੀਰ ਕਮਲਦੀਪ ਸਿੰਘ ਜੀ (ਭੌਪਾਲ), ਵੀਰ ਅਜ਼ਾਦ ਕੰਬੋਜ - ਪੱਕੇ ਤੌਰ ਪਰ ਨਾਲ ਜੁੜ ਕੇ ਏਸ ਸੇਵਾ ਨੂੰ ਅੱਗੇ ਲੈ ਕੇ ਜਾ ਰਹੇ ਹਨ। ਗੜ ਅਨੰਦ ਨਾਲ ਤਕਰੀਬਨ ੩੦-੪੦ ਲਿਖਾਰੀ ਜੁੜੇ ਹਨ ਜੋ ਪੰਥ ਪਰਵਾਣਿਤ ਬੀੜ ਸਾਹਿਬ ਦੇ ਪੂਰਨ ਵਿਧਿ ਪੂਰਵਕ ਉਤਾਰੇ ਕਰ ਰਹੇ ਹਨ ਅਤੇ ੨੦੦ ਕੁ ਲਿਖਾਰੀ ਹਨ ਜੋ ਪੋਥੀਆਂ ਸਾਹਿਬ ਤੇ ਗੁਟਕੇ ਤਿਆਰ ਕਰ ਰਹੇ ਹਨ।',
  'ਗੜ ਅਨੰਦ ਚ ਅਸੀ ਅਖਰਾਂ ਦੀ ਬਣਾਵਟ, ਅੱਖਰ ਜੋੜਣੇ, ਕਾਗਜ਼ ਤੇ ਲੀਕਾਂ ਮਾਰਨੀਆਂ, ਹਾਸ਼ੀਏ, ਹੜਤਾਲ, ਅਤੇ ਲਿਖਣ ਦੇ ਸਾਰੇ ਨੁਕਤੇ ਸਿਖਾਉਂਦੇ ਹਾਂ ਤਾਂ ਕਿ ਗੁਰਬਾਣੀ ਲਿਖਣ ਵੇਲੇ ਕਿਸੇ ਕਿਸਮ ਦੀ ਚੂਕ ਤੋ ਬਚਿਆ ਜਾ ਸਕੇ। ਜਿਤਨਾ ਚਿਰ ਇਕ ਵਿਦਿਆਰਥੀ ਚੰਗਾ ਲਿਖਣ ਯੋਗ ਨਈ ਹੋ ਜਾਂਦਾ ਤੇ ਸਾਰੇ ਨਿਯਮ ਪੱਕੇ ਨਈ ਕਰ ਲੈਂਦਾ, ਉਤਨਾ ਚਿਰ ਉਸ ਨੂੰ ਗੁਰਬਾਣੀ ਨਈ ਲਿਖਣ ਦਿਤੀ ਜਾਂਦੀ। ਸਾਰੇ ਲਿਖਾਰੀਆਂ ਨੂੰ ਕਾਗਜ਼, ਕਲਮਾਂ, ਸਿਆਹੀ, ਲਿਖਣ ਲਈ ਆਸਣ - ਸਬ ਸਮੱਗਰੀ ਮਹੁੱਈਆ ਕਰਵਾਂਦੇ ਹਾਂ। ਗੜ ਅਨੰਦ ਚ ਏਹੁ ਸਾਰਾ ਕਾਰਜ ਸਾਡੇ ਸੇਵਾਦਾਰਾਂ ਅਤੇ ਸੰਗਤਿ ਦੇ ਦਸਵੰਧ ਨਾਲ ਹੀ ਚੱਲ ਰਹੇ ਨੇ।',
];

export function HomeTeacher() {
  const [isWisdomOpen, setIsWisdomOpen] = useState(false);

  return (
    <section
      id="about"
      style={{
        background: '#EAE3D5',
        borderTop: '1px solid rgba(26,46,46,0.08)',
        padding: '80px 0',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))',
            gap: 64,
            alignItems: 'center',
          }}
        >
          {/* Teacher photo */}
          <div
            style={{
              aspectRatio: '4/5',
              borderRadius: 4,
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(194,163,107,0.15)',
              maxWidth: 420,
            }}
          >
            <Image
              src={TEACHER_IMAGE}
              alt="Jathedar Simranjeet Singh"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              style={{
                objectFit: 'cover',
                objectPosition: 'top',
                filter: 'saturate(0.85)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '20px 24px',
                background: 'rgba(10,30,30,0.9)',
              }}
            >
              <div
                style={{
                  fontFamily: FONT_GU,
                  fontSize: 18,
                  fontWeight: 400,
                  color: '#F5F1E8',
                  lineHeight: 1.7,
                }}
              >
                ਸਿਮਰਨਜੀਤ ਸਿੰਘ
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: 'rgba(194,163,107,0.7)',
                  letterSpacing: '0.05em',
                  marginTop: 4,
                }}
              >
                ਗੁਰੂ ਗ੍ਰੰਥ ਜੀ ਗੁਰੂ ਪੰਥ ਜੀ ਅਤੇ ਸਾਧਸੰਗਤਿ ਦਾ ਗੋਲਾ
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div
              style={{
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#7FAF9B',
                marginBottom: 12,
              }}
            >
              Our Guiding Light
            </div>
            <h2
              style={{
                fontFamily: FONT_DISPLAY,
                fontSize: 'clamp(26px,3.5vw,38px)',
                fontWeight: 300,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: '#1A2E2E',
                marginBottom: 20,
              }}
            >
              Words from Jathedar Ji
            </h2>
            <p
              lang="pa"
              style={{
                fontFamily: FONT_GU,
                fontSize: 15,
                lineHeight: 1.9,
                color: 'rgba(26,46,46,0.7)',
                marginBottom: 16,
              }}
            >
              ਧੰਨੁ ਸੁ ਕਾਗਦੁ ਕਲਮ ਧੰਨੁ ਧਨੁ ਭਾਂਡਾ ਧਨੁ ਮਸੁ ॥
              <br />
              ਧਨੁ ਲੇਖਾਰੀ ਨਾਨਕਾ ਜਿਨਿ ਨਾਮੁ ਲਿਖਾਇਆ ਸਚੁ ॥੧॥
            </p>
            <p
              lang="pa"
              style={{
                fontFamily: FONT_GU,
                fontSize: 15,
                lineHeight: 1.9,
                color: 'rgba(26,46,46,0.7)',
                marginBottom: 24,
                maxHeight: 108,
                overflow: 'hidden',
              }}
            >
              ਸਤਿਗੁਰੁ ਸਚੇ ਪਾਤਿਸ਼ਾਹ ਨਿਰੰਕਾਰੀ ਜੋਤਿ ਗੁਰੂ ਨਾਨਕ ਸਾਹਿਬ ਜੀ ਨੇ ਸਮੁੱਚੀ ਮਾਨਵਤਾ ਤੇ ਉਧਾਰ
              ਲਈ ਜਨਮ ਧਾਰਿਆ। ਵੱਖ ਵੱਖ ਥਾਈਂ ਭਰਮਣ ਕਰਕੇ ਬੇਅੰਤ ਭਟਕਿਆ ਨੂੰ ਸਿੱਧੇ ਰਾਹ ਪਾਇਆ ਤੇ ਉਹਨਾਂ ਨੂੰ
              ਸਬਦ ਦੇ ਲੜ ਲਾਇਆ।
            </p>

            <div
              style={{
                borderLeft: '2px solid #C2A36B',
                paddingLeft: 20,
              }}
            >
              <blockquote
                style={{
                  fontFamily: FONT_GU,
                  fontSize: 16,
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: '#1A2E2E',
                  marginBottom: 10,
                }}
                lang="pa"
              >
                ਕਹਤੇ ਪਵਿਤ੍ਰ ਸੁਣਤੇ ਸਭਿ ਧੰਨੁ ਲਿਖਤੀਂ ਕੁਲੁ ਤਾਰਿਆ ਜੀਉ ॥
              </blockquote>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'rgba(194,163,107,0.8)',
                }}
              >
                ਹੱਥਾਂ ਨਾਲ ਗੁਰਬਾਣੀ ਲਿਖਿਆ ਹੱਥ ਪਵਿੱਤਰ ਹੁੰਦੇ ਨੇ।
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsWisdomOpen(true);
              }}
              style={{
                marginTop: 28,
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: '0.04em',
                padding: '12px 24px',
                background: '#1A2E2E',
                color: '#F5F1E8',
                border: '1px solid #1A2E2E',
                borderRadius: 4,
                cursor: 'pointer',
                transition: 'background 200ms ease, border-color 200ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#163535';
                e.currentTarget.style.borderColor = '#163535';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#1A2E2E';
                e.currentTarget.style.borderColor = '#1A2E2E';
              }}
            >
              Read complete letter
            </button>
          </div>
        </div>
      </div>

      {isWisdomOpen && (
        <div
          aria-labelledby="jathedar-modal-title"
          aria-modal="true"
          role="dialog"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 80,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
          }}
        >
          <button
            type="button"
            aria-label="Close Jathedar Ji letter"
            onClick={() => {
              setIsWisdomOpen(false);
            }}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(10,30,30,0.78)',
              border: 'none',
              cursor: 'default',
            }}
          />

          <div
            className="flex max-h-[90vh] w-full max-w-[980px] flex-col overflow-hidden rounded-[4px] md:flex-row"
            style={{
              position: 'relative',
              background: '#F5F1E8',
              border: '1px solid rgba(194,163,107,0.32)',
            }}
          >
            <div
              className="relative min-h-[260px] shrink-0 md:min-h-0 md:w-[34%]"
              style={{
                borderRight: '1px solid rgba(194,163,107,0.18)',
                background: '#0F2A2A',
              }}
            >
              <Image
                src={TEACHER_IMAGE}
                alt="Jathedar Simranjeet Singh"
                fill
                sizes="(max-width: 768px) 100vw, 38vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top',
                  filter: 'saturate(0.85)',
                }}
              />
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(10,30,30,0.14)',
                }}
              />
            </div>

            <div
              className="min-w-0 flex-1 overflow-y-auto md:max-h-[90vh]"
              style={{
                padding: '36px clamp(24px, 4vw, 48px)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 16,
                  alignItems: 'flex-start',
                  marginBottom: 28,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 500,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: '#7FAF9B',
                      marginBottom: 10,
                    }}
                  >
                    Our Guiding Light
                  </div>
                  <h3
                    id="jathedar-modal-title"
                    style={{
                      fontFamily: FONT_DISPLAY,
                      fontSize: 'clamp(28px, 4vw, 40px)',
                      fontWeight: 300,
                      lineHeight: 1.15,
                      letterSpacing: '-0.02em',
                      color: '#1A2E2E',
                      margin: 0,
                    }}
                  >
                    Words from Jathedar Ji
                  </h3>
                  <p
                    lang="pa"
                    style={{
                      fontFamily: FONT_GU,
                      color: '#C2A36B',
                      fontSize: 13,
                      fontWeight: 500,
                      letterSpacing: '0.04em',
                      lineHeight: 1.7,
                      marginTop: 8,
                    }}
                  >
                    ਸਿਮਰਨਜੀਤ ਸਿੰਘ
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIsWisdomOpen(false);
                  }}
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(26,46,46,0.22)',
                    borderRadius: 4,
                    color: 'rgba(26,46,46,0.65)',
                    cursor: 'pointer',
                    flexShrink: 0,
                    fontSize: 12,
                    letterSpacing: '0.05em',
                    padding: '8px 14px',
                    textTransform: 'uppercase',
                  }}
                >
                  Close
                </button>
              </div>

              <div
                lang="pa"
                style={{
                  color: 'rgba(26,46,46,0.82)',
                  fontFamily: FONT_GU,
                  fontSize: 14,
                  lineHeight: 2,
                }}
              >
                <p
                  style={{
                    borderLeft: '2px solid #C2A36B',
                    color: '#1A2E2E',
                    fontSize: 16,
                    lineHeight: 2,
                    margin: '0 0 28px',
                    paddingLeft: 18,
                  }}
                >
                  ਧੰਨੁ ਸੁ ਕਾਗਦੁ ਕਲਮ ਧੰਨੁ ਧਨੁ ਭਾਂਡਾ ਧਨੁ ਮਸੁ ॥
                  <br />
                  ਧਨੁ ਲੇਖਾਰੀ ਨਾਨਕਾ ਜਿਨਿ ਨਾਮੁ ਲਿਖਾਇਆ ਸਚੁ ॥੧॥
                </p>

                {JATHEDAR_PARAGRAPHS.slice(0, 7).map((paragraph) => (
                  <p key={paragraph} style={{ margin: '0 0 22px' }}>
                    {paragraph}
                  </p>
                ))}

                <div
                  style={{
                    borderLeft: '2px solid rgba(194,163,107,0.55)',
                    margin: '4px 0 24px',
                    padding: '12px 0 12px 18px',
                  }}
                >
                  <p
                    style={{
                      color: '#C2A36B',
                      fontWeight: 500,
                      margin: '0 0 8px',
                    }}
                  >
                    ਕਹਤੇ ਪਵਿਤ੍ਰ ਸੁਣਤੇ ਸਭਿ ਧੰਨੁ ਲਿਖਤੀਂ ਕੁਲੁ ਤਾਰਿਆ ਜੀਉ ॥
                  </p>
                  <p
                    style={{
                      color: 'rgba(26,46,46,0.68)',
                      fontSize: 13,
                      margin: 0,
                    }}
                  >
                    ਹੱਥਾਂ ਨਾਲ ਗੁਰਬਾਣੀ ਲਿਖਿਆ ਹੱਥ ਪਵਿੱਤਰ ਹੁੰਦੇ ਨੇ। ਜੀਵਨ ਚ ਸਹਿਜ ਆਉਂਦਾ ਹੈ। ਗੁਰੂ
                    ਪ੍ਰਤੀ ਪ੍ਰੇਮ ਵੱਧਦਾ ਹੈ।
                  </p>
                </div>

                {JATHEDAR_PARAGRAPHS.slice(7).map((paragraph) => (
                  <p key={paragraph} style={{ margin: '0 0 22px' }}>
                    {paragraph}
                  </p>
                ))}

                <p
                  style={{
                    color: 'rgba(26,46,46,0.72)',
                    fontStyle: 'italic',
                    margin: '0 0 28px',
                  }}
                >
                  ਅਰਦਾਸ ਹੈ ਕਿ ਮਹਾਰਾਜ ਸੱਚੇ ਪਾਤਸ਼ਾਹ ਕਿਰਪਾ ਬਣਾਈ ਰੱਖਣ ਲਗਾਤਾਰਾ ਚ ਸੇਵਾ ਲੈਂਦੇ
                  ਰਹਿਣ।
                </p>

                <div
                  style={{
                    borderTop: '1px solid rgba(194,163,107,0.22)',
                    paddingTop: 18,
                  }}
                >
                  <p
                    style={{
                      color: '#1A2E2E',
                      fontWeight: 500,
                      margin: '0 0 6px',
                    }}
                  >
                    ਨੀਚਾ ਅੰਦਰਿ ਨੀਚ ਜਾਤਿ ਨੀਚੀ ਹੂ ਅਤਿ ਨੀਚ
                  </p>
                  <p
                    style={{
                      color: '#C2A36B',
                      fontSize: 12,
                      fontWeight: 500,
                      letterSpacing: '0.03em',
                      margin: '0 0 10px',
                    }}
                  >
                    ਗੁਰੂ ਗ੍ਰੰਥ ਜੀ ਗੁਰੂ ਪੰਥ ਜੀ ਅਤੇ ਸਾਧਸੰਗਤਿ ਦਾ ਗੋਲਾ
                  </p>
                  <p
                    style={{
                      color: '#1A2E2E',
                      fontWeight: 500,
                      margin: 0,
                    }}
                  >
                    ਸਿਮਰਨਜੀਤ ਸਿੰਘ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
