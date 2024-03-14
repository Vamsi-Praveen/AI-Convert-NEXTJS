'use client'
import React, { useRef, useState } from 'react'
import AceEditor from "react-ace"
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/mode-c_cpp'
import 'ace-builds/src-noconflict/theme-github'
import { Code2, Copy, Loader2Icon } from 'lucide-react'
import { useProvider } from '@/context/ContextProvider'
import { languages } from '@/constants/languages'
import toast from 'react-hot-toast'

const Editor = () => {
    const [codeSnippet, setCodeSnippet] = useState('')
    const [codeOutput, setCodeOutput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const { lang, setLang } = useProvider()
    const outputRef = useRef()
    const handleChange = (code) => {
        setCodeSnippet(code)
    }
    const handleCode = async () => {
        setIsLoading(true)
        setCodeOutput('')
        await fetch('/api/gemini', {
            method: 'POST', body: JSON.stringify({ 'prompt': codeSnippet, 'lang': lang })
        })
            .then((res) => res.json())
            .then((data) => {
                setCodeOutput(data.output)
                setIsLoading(false)
            })
    }
    const handleCopy = async () => {
        try {
            if (outputRef.current) {
                const editorValue = outputRef.current.editor.getSession().getValue();
                await navigator.clipboard.writeText(editorValue);
                toast.success('Copied to Clipboard')
            }
        } catch (error) {
            console.error('Unable to copy to clipboard:', error);
        }
    }
    return (
        <div className='w-full h-[600px] md:py-5 relative' id='editor'>
            <div className='h-[300px] w-[300px] bg-emerald-100 absolute left-0 -z-50 rounded-full blur-[100px]' />
            <div className='h-[300px] w-[300px] bg-orange-100 absolute md:-right-20 bottom-0 -z-50 rounded-full blur-[100px]' />
            <div className='flex items-center justify-between'>
                <h1 className='text-xl mb-4'>Paste or Write your Code Here</h1>
                <select className='border rounded-sm shadow-sm' onChange={(e) => setLang(e.target.value)}>
                    {
                        languages.map((lang, index) => {
                            return <option key={index} value={lang}>{lang}</option>
                        })
                    }
                </select>
            </div>
            <div className='w-full h-full pb-20 flex gap-10 md:flex-row flex-col'>
                <div className='flex-1 relative shadow-md'>
                    <AceEditor
                        mode={'javascript'}
                        theme='github'
                        name='ace-editor'
                        fontSize={"16px"}
                        editorProps={{ $blockScrolling: true }}
                        width='100%'
                        height='100%'
                        defaultValue={codeSnippet}
                        onChange={handleChange}
                        className={isLoading ? 'pointer-events-none' : 'pointer-events-all'}
                    >
                    </AceEditor>
                    <div className='h-[50px] w-[50px] rounded-full bg-red-500 absolute z-10 bottom-3 right-3 flex items-center justify-center cursor-pointer shadow-md'
                        onClick={handleCode}
                    >
                        <Code2 color='white' />
                    </div>
                </div>
                <div className='flex-1 shadow-md relative'>
                    <AceEditor
                        mode={'javascript'}
                        theme='github'
                        name='ace-editor'
                        fontSize={"16px"}
                        editorProps={{ $blockScrolling: true }}
                        width='100%'
                        height='100%'
                        value={codeOutput}
                        className={isLoading ? 'pointer-events-none' : 'pointer-events-all'}
                        ref={outputRef}
                    >
                    </AceEditor>
                    {
                        isLoading && <div className='absolute w-full h-full inset-0 pointer-events-none z-10 flex items-center justify-center bg-opacity-50 bg-slate-100'>
                            <Loader2Icon className='animate-spin' />
                        </div>
                    }
                    <div className='cursor-pointer h-[30px] w-[30px] bg-red-500 flex items-center justify-center absolute rounded-full shadow-md right-3 bottom-3' onClick={handleCopy}>
                        <Copy color='white' size={18} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Editor