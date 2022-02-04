"use strict";

const { SlashCommandBuilder } = require("@discordjs/builders");
const { CommandInteraction, Permissions, MessageEmbed } = require("discord.js");

module.exports.cooldown = {
    length: 10000, /* in ms */
    users: new Set()
};

/**
 * Runs ping command.
 * @param {CommandInteraction} interaction The Command Interaciton
 * @param {any} utils Additional util
 */
module.exports.run = async (interaction, utils) =>
{
    try
    {
        const roles = interaction.guild.roles.cache;

        

        const embed = new MessageEmbed()
        .setDescription(
            `Total Roles: ${roles.size}`,
            `\n${roles.map(role => `${role.name} - ${role.id}`).join("\n")}`
        )

        interaction.reply({ embeds: [embed], ephemeral: true })

    }
    catch (err)
    {
        return Promise.reject(err);
    }
};

module.exports.permissions = {
    clientPermissions: [Permissions.FLAGS.SEND_MESSAGES],
    userPermissions: [Permissions.FLAGS.MANAGE_CHANNELS]
};

module.exports.data = new SlashCommandBuilder()
    .setName("listroles")
    .setDescription("List all the Roles on the Server");
