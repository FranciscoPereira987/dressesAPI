from transformers import AutoModelForSeq2SeqLM, AutoTokenizer
import logging as log
class Translator:

    def __init__(self) -> None:
        self._tokenizer = AutoTokenizer.from_pretrained(
            "facebook/nllb-200-distilled-600M", src_lang="es_Latn"
        )
        self._model = AutoModelForSeq2SeqLM.from_pretrained(
             "facebook/nllb-200-distilled-600M"
        )

    def translate(self, sentence: str) -> str:
        inputs = self._tokenizer(sentence, return_tensors="pt")
        log.debug("Trying to translate")
        translated_tokens = self._model.generate(**inputs, forced_bos_token_id=self._tokenizer.lang_code_to_id["eng_Latn"], max_length=100)
        return self._tokenizer.batch_decode(translated_tokens, skip_special_tokens=True)[0]