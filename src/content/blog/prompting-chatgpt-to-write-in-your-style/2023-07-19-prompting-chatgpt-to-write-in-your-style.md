---
title: "Power Up Your Pen: Prompting ChatGPT to Write in Your Style"
date: "2023-07-19"
author: "Mario Guerra"
categories:
  - Artificial Intelligence
  - Future of Work
  - Technology
tags:
  - aiworkflow
  - becoming a ChatGPT master
  - ChatGPT
  - chatGPT for blog content
  - Fine-tuning ChatGPT output
  - future of work
  - futureofwork
  - workflow
description: "Learn how to maximize the potential of ChatGPT with this comprehensive guide. Discover its capabilities, practical applications, and tips for crafting effective prompts, fine-tuning responses, and understanding its limits to make the most of this powerful AI tool."
image: "Robot-author.png"
slug: "prompting-chatgpt-to-write-in-your-style"
---


The rise of AI-powered language models like ChatGPT has revolutionized the way content is created, making it faster and more efficient than ever before. However, using it to craft content that truly reflects your own unique voice and tone can be challenging.


I’ve been working with Large Language Models (LLMs) like ChatGPT for a while, and I’ve gotten pretty good at getting useful results out of them. The key is to carefully direct the model’s output through the use of fine-tuned prompts.


This article will guide you through a workflow using ChatGPT to create blog content that not only conveys your intended message but also captures the distinctive character of your own writing style.


It’s a long article, but I promise the juice is worth the squeeze.


## Getting the best output from ChatGPT


ChatGPT is a great tool, but it’s also kind of dumb. Without clear direction, it will generate content for you but it’s unlikely to be content you’ll find useful for publishing.


ChatGPT works best with structure, where you provide information and details that will influence the content it produces.


To fully benefit from ChatGPT during content creation, it’s helpful to understand how it operates internally. ChatGPT works by breaking input text into segments termed tokens, which serve as the basic processing units. It then examines these tokens and generates
 a response based on the context and embedded information.


ChatGPT can process a specific number of tokens at once, known as the context window. This window has a considerable impact on the AI’s output, as it defines the segment of input text the AI takes into account while generating a response. Since the context
 window has a limited size, the model can only handle a finite amount of data.


This constraint underlines the importance of composing concise and focused prompts, including crucial details for generating content that is consistent with your desired voice and style.


## Evaluate your writing style


I’m now going to walk you through a blog-creation workflow using ChatGPT, starting with an analysis of writing style.


First, pick an example of your writing that you feel most accurately reflects your personal writing style. For this example, I’m using the text of a blog post I wrote for the [Azure SDK blog about our open-source SDK test proxy](https://devblogs.microsoft.com/azure-sdk/level-up-your-cloud-testing-game-with-the-azure-sdk-test-proxy/).


I’ll direct the bot to list the elements that define a person’s writing style, then I’ll have it evaluate my writing sample based on those elements.


Next, **and this is crucial**, I’ll direct the bot to produce a prompt I can use to feed back into ChatGPT to reproduce my writing style.


Here’s my interaction with ChatGPT based on GPT-4, hosted on [Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/overview):


> **Me**: what are the elements that define a person’s writing style?

> **Bot**: *A person’s writing style is a unique blend of various elements that together create a distinctive voice in their written work. Some elements that define or influence a person’s writing style are:*

> *Vocabulary: The choice of words has a significant impact on one’s writing style. A rich and varied vocabulary can make writing more engaging and descriptive.*

> *Syntax: This refers to the arrangement of words, phrases, and clauses in sentences. A writer’s sentence structure, including the length, complexity, and type of sentences, is a crucial aspect of their writing style.*

> *Punctuation: The use of commas, periods, semicolons, and other punctuation marks can significantly affect the flow and rhythm of a piece of writing.*

> *Tone: A writer’s tone communicates their attitude towards a subject and their audience. It can be formal, informal, authoritative, humorous, or any combination of these, and it strongly affects the writing style.*

> *Perspective: The point of view (first, second, or third person) chosen by the writer can significantly impact the connection between the writer, the story, and the reader.*

> *Figurative language: The use of similes, metaphors, alliteration, and other figures of speech can add layers of meaning, depth, and interest to a writer’s work.*

> *Imagery: The degree to which a writer uses descriptive language to create vivid mental pictures, sensations, and emotions in the reader’s mind influences their writing style.*

> *Rhythm: This refers to the pattern of stressed and unstressed syllables in prose, which can create a ‘flow’ in the writing. Rhythm can provide a unique pace and cadence to the text.*

> *Dialogue: A writer’s approach to crafting and presenting dialogue, including the use of slang, dialects, and idiosyncrasies, contributes to the overall style.*

> *Theme: The topics, motifs, and messages a writer consistently explores in their work help define their writing style.*

> *Each writer combines these elements in their own way, creating a unique “fingerprint” that sets their writing apart from others.*

> **Me**: Using the elements of writing style you just defined, evaluate the writing style of the following content. Describe each writing style element you’ve evaluated from the content, and finish with a prompt I can use to reproduce this exact writing
 style for future writing assignments:


> _Testing is an essential step in the software development process. Finding bugs through testing before releasing software to production saves time and money over the lifetime of the product. However, testing software against a live cloud service like Azure
 can be costly, since services must be provisioned and maintained in order to run the tests…_


Note three things here:

1. I didn’t add *all* the text from my test proxy blog post into my ChatGPT prompt, since it would overflow my token limit. I copied as much as I could and still remain under my limit.

2. I also didn’t show you *all* the text from my blog post that I fed into ChatGPT, for the sake of brevity. I’m only showing a small portion of the full writing sample text I fed into the chat prompt because this article is already too long as it is.

3. If you have more sample text than you can fit in a single prompt, you can always ‘chunk’ the text sample and ask ChatGPT to analyze different sections as part of the overall style analysis. I may do another article on chunking if there’s enough interest.


Let’s get back to the chat:


> **Bot**: *Here’s the evaluation of the writing style for the provided content using the elements defined earlier:*


> *Vocabulary: The vocabulary used in the content is technical and focused on software development, particularly Azure SDKs, testing, and cloud services. Domain-specific terms and acronyms are used throughout the text, creating a specialized vocabulary appropriate
 for its target audience.*


> *Syntax: The content consists mainly of clear and concise sentences. There is a balanced mix of simple, compound, and complex sentences, catering to a technical audience, and effectively presenting technical details.*


> *Punctuation: Standard punctuation is used throughout the text, following common conventions. There are no unusual punctuations or deviations from ordinary usage.*


> *Tone: The tone of the content is informative, precise, and instructive. It avoids casual language, maintaining a professional tone suited to the technical nature of the subject matter.*


> *Perspective: The content is written from a third-person perspective, and occasionally first-person plural perspective when referring to the Azure SDK team. This choice creates an objective and informative tone throughout the content.*


> *Figurative language: The content does not heavily utilize figurative language, as its main focus is to convey technical information in a clear and precise manner.*


> *Imagery: The imagery in this content is minimal, as the primary focus is on providing concrete technical details and guidance related to the features and usage of the Azure SDK and test proxy.*


> *Rhythm: The rhythm in the content is consistent. There is a clear and steady progression of ideas, which effectively conveys the intended message.*


> *Dialogue: The content does not contain any dialogue, as its primary purpose is to provide technical instructions and explanations.*


> ***To reproduce this writing style for future assignments, use the following guidelines:***

> 

> - **Use clear, concise, and direct language to convey technical information.**

> - **Maintain a professional and instructive tone.**

> - **Favor short, straightforward sentences and paragraphs.**

> - **Incorporate domain-specific vocabulary and terms appropriate to your target audience, but avoid jargon where possible.**

> - **Write from a third-person perspective, and occasionally use first-person plural when referring to a team or collective effort.**

> - **Focus on providing clear and detailed explanations while minimizing figurative language and imagery.**

> - **Maintain a steady rhythm and progression of ideas.**

> - **Forgo dialogue, as the focus is on delivering instructions and technical details.**

> - **Optimize for maximum readability, clarity, and comprehension.**


As you can see, the bot analyzed my content and returned a prompt at the end, which I’ve marked in
**bold text.** I can save this prompt and use it to create content in a way that aligns with my personal writing style.


Once you have a prompt that encapsulates your writing style, save it in a text file somewhere handy, so you can copy/paste it back into ChatGPT for later use.


## Ask ChatGPT to write like a human and not like a robot


ChatGPT is great at generating content, but it’s so great that the content often comes across as being written by a bot, even with your personal style blog prompt.


When using ChatGPT for blog content creation, it’s important to consider the role of perplexity and burstiness in generating text that mirrors human writing, striking a balance between engaging content and concise information delivery.


**Perplexity** is a measure used to assess how well an AI can guess the upcoming words in a text. In this context, a low perplexity means that the AI is more effective at generating text similar to human writing because it better understands the patterns
 and structures of the language. By achieving a low perplexity, ChatGPT can create content that is clear, informative, and engaging while closely resembling the writing style of a human author.


**Burstiness** deals with how frequently words or phrases appear within a text and how closely they are grouped together. In the context of generating text with ChatGPT, addressing burstiness ensures that the content remains diverse, interesting, and
 relevant, while minimizing unnecessary repetition. By carefully formulating your prompts, you can guide ChatGPT to create content with an appropriate level of burstiness, making the generated text more engaging and similar to human writing.


We can’t directly control the levels of perplexity and burstiness ChatGPT uses to generate content, but we can influence them through our prompt.


With these aspects in mind, we will take our writing analysis blog prompt and add the following instruction:


*Utilizing these guidelines, craft content that effectively mirrors human writing by adhering to the following steps:*


*1. Opt for a perplexity value around 20 to balance fluency and diversity in the text.*  

*2. Tweak the burstiness setting to imitate natural variations in sentence length, as seen in human writing.*  

*3. Use language that is engaging, clear, and concise, with a logical progression of ideas.*  

*4. Display solid subject matter knowledge, providing accurate and contextually relevant information.*  

*5. Mimic a genuine writing style that resonates with readers, resembling authentic human-created content.*


*So, my personal writing style prompt now looks like this:*


- **Use clear, concise, and direct language to convey technical information.**

- **Maintain a professional and instructive tone.**

- **Favor short, straightforward sentences and paragraphs.**

- **Incorporate domain-specific vocabulary and terms appropriate to your target audience, but avoid jargon where possible.**

- **Write from a third-person perspective, and occasionally use first-person plural when referring to a team or collective effort.**

- **Focus on providing clear and detailed explanations while minimizing figurative language and imagery.**

- **Maintain a steady rhythm and progression of ideas.**

- **Forgo dialogue, as the focus is on delivering instructions and technical details.**

- **Optimize for maximum readability, clarity, and comprehension.**

- **Utilizing these guidelines, craft content that effectively mirrors human writing by adhering to the following steps:**

    1. **Opt for a perplexity value around 20 to balance fluency and diversity in the text.**

    2. **Tweak the burstiness setting to imitate natural variations in sentence length, as seen in human writing.**

    3. **Use language that is engaging, clear, and concise, with a logical progression of ideas.**

    4. **Display solid subject matter knowledge, providing accurate and contextually relevant information.**

    5. **Mimic a genuine writing style that resonates with readers, resembling authentic human-created content.**


## Seed ChatGPT with relevant information


Content generation with Large Language Models like ChatGPT works best when you provide proper context and explicit directions for it to follow.


For a blog post, the first step is to seed the model with the main points you want to cover in the post. For my example, I want to write a blog post covering the most important things a developer should know about Azure SDKs.


I’ll instruct the bot to remember the information I provide, and I’ll give the information a label so it can be easily recalled later.


In my example I’ve given my points to cover the label \[SDK INFO\]. Here’s the chat:


> **Me**: Remember the following information as \[SDK INFO\]:

> 

> Some of the most important things a developer should know about Azure SDKs are:

> 

> - Azure SDKs provide consistent and idiomatic libraries for accessing Azure services from various programming languages. You can use the same patterns and practices across different services and platforms.

> - Azure SDKs support both .NET Core and .NET Framework, as well as Java, JavaScript/TypeScript, Python, Go, C++, C, Android, and iOS. You can find the latest releases, documentation, and design guidelines for each language on the Azure Downloads page.

> - Azure SDKs offer both synchronous and asynchronous methods for interacting with Azure services. You can choose the best option for your application’s performance and scalability needs.

> - Azure SDKs handle authentication, error handling, logging, and retry logic for you. You can use the Azure Identity library to authenticate your application to Azure using various credentials and tokens.

> - Azure SDKs are open source and hosted on GitHub. You can contribute to the development, report issues, and request features.

> - Azure SDKs follow the best practices for client lifetime management and thread-safety. You should treat clients as singletons and avoid creating multiple instances of them. You should also be aware that models are not thread-safe and use synchronization
 primitives if you need to access them from different threads.

> 

> **Bot**: *I’ll remember this information as \[SDK INFO\].*


Next, I’ll seed ChatGPT with the writing style guidelines derived from the analysis of my writing sample.


Once again, I’ll direct the bot to remember this information and I’ll give this prompt the label \[BLOG PROMPT\].


> **Me**: Remember the following writing guidelines as \[BLOG PROMPT\]:

> - Use clear, concise, and direct language to convey technical information.

> - Maintain a professional and instructive tone.

> - Favor short, straightforward sentences and paragraphs.

> - Incorporate domain-specific vocabulary and terms appropriate to your target audience, but avoid jargon where possible.

> - Write from a third-person perspective, and occasionally use first-person plural when referring to a team or collective effort.

> - Focus on providing clear and detailed explanations while minimizing figurative language and imagery.

> - Maintain a steady rhythm and progression of ideas.

> - Forgo dialogue, as the focus is on delivering instructions and technical details.

> - Optimize for maximum readability, clarity, and comprehension.

> - Utilizing these guidelines, craft content that effectively mirrors human writing by adhering to the following steps:

>     1. Opt for a perplexity value around 20 to balance fluency and diversity in the text.

>     2. Tweak the burstiness setting to imitate natural variations in sentence length, as seen in human writing.

>     3. Use language that is engaging, clear, and concise, with a logical progression of ideas.

>     4. Display solid subject matter knowledge, providing accurate and contextually relevant information.

>     5. Mimic a genuine writing style that resonates with readers, resembling authentic human-created content.

> **Bot**: *I’ll remember this information as \[BLOG PROMPT\].*

## Generate an outline

Now you’re ready for some magic, but before jumping into creating the blog post it’s useful to remember that ChatGPT works best with structure. Having an outline for the bot to work with will give the best results, and luckily ChatGPT can help with that as
 well.

First direct the bot to create an outline of the blog post, using the information saved as labels in the previous steps. Back to the chat:

> **Me**: Create an outline for a blog post covering all the points in \[SDK INFO\]. The outline should align with the guidelines defined in \[BLOG PROMPT\].

> **Bot**: **Outline for a Blog Post on Azure SDKs**

> *I. Introduction*

>   - A. Brief overview of Azure SDKs

>   - B. Importance of consistent and idiomatic libraries for accessing Azure services

> *II. Supported Programming Languages*

>   - A. List of supported languages

>   - B. Azure Downloads page for latest releases, documentation, and design guidelines

> *III. Synchronous and Asynchronous Methods*

>   - A. Explanation of synchronous and asynchronous methods

>   - B. Choosing the best option for application performance and scalability

> *IV. Authentication and Error Handling*

>   - A. Azure SDKs handling authentication, error handling, logging, and retry logic

>   - B. Azure Identity library for various credentials and tokens

> *V. Open Source and GitHub*

  - A. Azure SDKs’ open-source nature

  - B. How to contribute, report issues, and request features


*VI. Best Practices for Client Lifetime Management and Thread Safety*

  - A. Treating clients as singletons

  - B. Awareness of non-thread-safe models and synchronization primitives


*VII. Conclusion*

  - A. Recap of key points

  - B. Encouragement to explore Azure SDKs for seamless integration with Azure services

## Generate the blog post

Now I’m ready to have ChatGPT generate a blog post using my writing style.

I’ll direct the bot to write the post based on the outline, recalling the information stored using the labels. Note that this is all happening in a single chat session, so when I refer to ‘this outline’ in the chat below, the bot knows to refer back to the
 outline it just created:

> **Me**: Use this outline to write the blog post for the information defined in \[SDK INFO\]. Apply the writing style guidelines defined in \[BLOG PROMPT\].

> **Bot**: **Mastering Azure SDKs: A Comprehensive Guide**

> **Introduction**

> Azure SDKs play a crucial role in the world of cloud computing, providing developers with consistent and idiomatic libraries for accessing a wide range of Azure services. This blog post offers a comprehensive guide to Azure SDKs, shedding light on their capabilities,
 supported programming languages, and best practices.

> **Supported Programming Languages**

> Azure SDKs cater to a diverse array of programming languages, including .NET Core, .NET Framework, Java, JavaScript/TypeScript, Python, Go, C++, C, Android, and iOS. To access the latest releases, documentation, and design guidelines for each language, visit
 the Azure Downloads page.

> **Synchronous and Asynchronous Methods**

> Azure SDKs offer both synchronous and asynchronous methods for interacting with Azure services. While synchronous methods execute sequentially, asynchronous methods allow multiple tasks to run concurrently. Developers can choose the most suitable option for
 their application’s performance and scalability needs, ensuring optimal resource utilization.

> **Authentication and Error Handling**

> One of the many advantages of Azure SDKs is their ability to handle authentication, error handling, logging, and retry logic, significantly reducing developers’ workload. The Azure Identity library simplifies application authentication to Azure using various
 credentials and tokens, ensuring a secure and seamless connection to Azure services.

> **Open Source and GitHub**

> Azure SDKs are open source and hosted on GitHub, providing a collaborative platform for developers to contribute to their development, report issues, and request features. By participating in the community-driven development process, developers can actively
 shape the future of Azure SDKs and enhance their integration with Azure services.

> **Best Practices for Client Lifetime Management and Thread Safety**

> When working with Azure SDKs, it’s essential to follow best practices for client lifetime management and thread safety. Developers should treat clients as singletons, avoiding the creation of multiple instances. Additionally, they must be aware that models
 are not thread-safe, requiring the use of synchronization primitives when accessing them from different threads.

> **Conclusion**

> Azure SDKs offer a powerful means for developers to access and interact with Azure services across multiple programming languages. By adhering to best practices and leveraging the numerous features of Azure SDKs, developers can ensure seamless integration
 with Azure services, ultimately enhancing their applications’ performance, scalability, and security.

## Iterate over the draft

At this point I have a decent draft of a blog post that aligns with my writing style. I wouldn’t say it’s perfect, but it’s a great start. I can now take this draft and do a manual editing pass – adding content and changing words or sentences as needed to better
 align with my writing style.

I can also iterate on the content a few times with the model to get better output. For example, let’s pretend it would be helpful to flesh out section 4 (Authentication, Error Handling, Logging, and Retry Logic) a bit more.

I’ll direct ChatGPT to refine the output, again instructing it to follow my writing style guidelines:

> **Me**: Redo the blog post, expanding on section 4 and adhering to the writing style guidelines defined in \[BLOG PROMPT\]. Keep everything else the same.


> **Bot**: **Mastering Azure SDKs: A Comprehensive Guide**

> **Introduction**

> Azure SDKs play a crucial role in the world of cloud computing, providing developers with consistent and idiomatic libraries for accessing a wide range of Azure services. This blog post offers a comprehensive guide to Azure SDKs, shedding light on their capabilities,
 supported programming languages, and best practices.

> **Supported Programming Languages**

> Azure SDKs cater to a diverse array of programming languages, including .NET Core, .NET Framework, Java, JavaScript/TypeScript, Python, Go, C++, C, Android, and iOS. To access the latest releases, documentation, and design guidelines for each language, visit the Azure Downloads page.

> **Synchronous and Asynchronous Methods**

> Azure SDKs offer both synchronous and asynchronous methods for interacting with Azure services. While synchronous methods execute sequentially, asynchronous methods allow multiple tasks to run concurrently. Developers can choose the most suitable option for their application’s performance and scalability needs, ensuring optimal resource utilization.

> **Authentication, Error Handling, Logging, and Retry Logic**

> One of the many advantages of Azure SDKs is their ability to handle various aspects of communication with Azure services, such as authentication, error handling, logging, and retry logic. This section delves deeper into these features, providing a better understanding of how they streamline developers’ work.

> **Authentication**: The Azure Identity library simplifies application authentication to Azure by supporting various credentials and tokens. It offers a seamless and secure connection to Azure services, handling the complexities of authentication while developers focus on building their applications.

> **Error Handling**: Azure SDKs are designed to manage errors gracefully, providing meaningful error messages and exceptions. This approach helps developers identify issues quickly, reducing debugging time and ensuring a more efficient development process.

> **Logging**: Azure SDKs come with built-in logging capabilities, enabling developers to monitor and troubleshoot their applications effectively. With customizable logging levels, developers can choose the desired granularity of information, optimizing their application’s performance and maintainability.

> **Retry Logic**: Azure SDKs incorporate robust retry logic, automatically handling transient failures and reducing the need for manual intervention. By intelligently retrying failed requests, Azure SDKs ensure a more resilient and reliable connection to Azure services.

> **Open Source and GitHub**

> Azure SDKs are open source and hosted on GitHub, providing a collaborative platform for developers to contribute to their development, report issues, and request features. By participating in the community-driven development process, developers can actively shape the future of Azure SDKs and enhance their integration with Azure services.

> **Best Practices for Client Lifetime Management and Thread Safety**

> When working with Azure SDKs, it’s essential to follow best practices for client lifetime management and thread safety. Developers should treat clients as singletons, avoiding the creation of multiple instances. Additionally, they must be aware that models are not thread-safe, requiring the use of synchronization primitives when accessing them from different threads.

> **Conclusion**

> Azure SDKs offer a powerful means for developers to access and interact with Azure services across multiple programming languages. By adhering to best practices and leveraging the numerous features of Azure SDKs, developers can ensure seamless integration with Azure services, ultimately enhancing their applications’ performance, scalability, and security.

## Conclusion

ChatGPT is a very powerful tool, if you know how to harness its abilities. By leveraging style analysis and employing effective prompt techniques, it’s possible to customize ChatGPT’s output to your unique writing voice.

I don’t recommend publishing the raw output, even after doing all this prep work. Large Language Models are still somewhat unpredictable, so your content will always benefit from fact-checking and editing. Use this workflow to generate a prompt that defines
 your writing style, and use the prompt plus seeding techniques I described to generate drafts you can use as a basis for accelerating your writing.

I hope you find this writeup helpful. Feel free to drop any questions you have in the comments section.