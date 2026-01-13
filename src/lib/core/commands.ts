import type { Component } from "svelte";
import type CommandProps from "$lib/components/commands/command-props.interface";
import Greeting from "$lib/components/commands/Greeting.svelte";
import Help from "$lib/components/commands/Help.svelte";
import Quote from "$lib/components/commands/Quote.svelte";
import Summary from "$lib/components/commands/Summary.svelte";

export type CommandComponent = Component<CommandProps>

const commands = new Map<string, CommandComponent>();

commands.set('greeting', Greeting);
commands.set('quote', Quote);
commands.set('help', Help);
commands.set('summary', Summary);

export default commands;

