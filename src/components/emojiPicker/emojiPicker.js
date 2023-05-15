import { forwardRef, useState } from "react";

import { data as emojiList } from "./data";
import EmojiSearch from "./emojiSearch";

export function EmojiPicker(props, inputRef) {
    const [isOpen, setIsOpen] = useState(false);
    const [emojis, setEmojis] = useState(emojiList);

    function handleClickOpen() {
        setIsOpen(!isOpen);
    }

    function handlerSearch(e) {
        const q = e.target.value.toLowerCase();

        if (!!q) {
            const search = emojiList.filter(emoji => {
                return (
                    emoji.name.toLowerCase().includes(q) ||
                    emoji.keywords.toLowerCase().includes(q)
                );
            });

            setEmojis(search);
        } else {
            //Consulta vacia del input search emojis
            setEmojis(emojiList);
        }
    }

    /* function EmojiPickerContainer() {
        return (
            <div>
                <EmojiSearch onSearch={handlerSearch} />
                <div>
                    {emojis.map((emoji) => (
                        <div key={emoji.symbol}>{emoji.symbol}</div>
                    ))}
                </div>
            </div>
        );
    } */

    return (
        <div>
            <button onClick={handleClickOpen}>😊</button>

            {isOpen ? (
                <div>
                    <EmojiSearch onSearch={handlerSearch} />
                    <div>
                        {emojis.map((emoji) => (
                            <EmojiButton key={emoji.symbol} emoji={emoji} onClick={handleOnClickEmoji}/>
                            
                        ))}
                    </div>
                </div> 
                ) : (
                    ""
                )}
        </div>
    );
}


export default forwardRef(EmojiPicker);